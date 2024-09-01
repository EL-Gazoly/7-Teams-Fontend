import { useEffect, useState, useReducer } from "react";
import { FirstCard } from "./FirstCard";
import ControlCard from "../../Components/ControlCard";
import SecondCard from "./SecondCard";
import ThridCard from "./ThridCard";
import FourthCard from "./FourthCard";
import { useParams, useNavigate } from "react-router-dom";
import { GetDevice } from "../../graphql/devices";
import { useQuery } from "@apollo/client";
import Loading from "../../Components/Loading";
import db from "../../config/firebase";
import { ref, update, onValue } from "firebase/database";
import { toast } from "sonner";
import UploadMoadl from "./_components/UploadModal";
import { useDisclosure } from "@nextui-org/react";
import UploadVideoModal from "./_components/UploadVideoModal";
import useTranslationStore from "@/stores/LanguageStore";
import { chemistryOptions, physicsOptions } from "../../data/expermients";
type isImageUploadingState = {
  isImageUploading: boolean | null;
};
type isImageUploadingAction = {
  type: "start" | "end" | "none";
};

const dispacth = (
  state: isImageUploadingState,
  action: isImageUploadingAction
) => {
  switch (action.type) {
    case "start":
      return true;
    case "end":
      return false;
    case "none":
      return null;
    default:
      return state;
  }
};

const HeadsetPage = () => {
  const { mac } = useParams<{ mac: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [deviceState, setDeviceState] = useState({});
  const [chemistryProgres, setChemistryProgres] = useState(0);
  const [physicsProgres, setPhysicsProgress] = useState(0);
  const [uploadImagePath, setUploadPath] = useState();

  const { language, getTranslation } = useTranslationStore();

  const [isImageUploading, dispatchIsImageUpload] = useReducer(dispacth, {
    isImageUploading: null,
  });

  const {
    isOpen: isOpenImage,
    onOpen: onOpenImage,
    onOpenChange: onOpenChangeImage,
  } = useDisclosure();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const ipcRenderer = (window as any).ipcRenderer;

  const {
    data: device,
    loading,
    error,
  } = useQuery(GetDevice, {
    variables: { macAddress: mac },
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    const deviceQuery = ref(db, `/Devices/${mac}`);
    const ipQuery = ref(db, `/Devices/${mac}/Get-IP`);

    update(deviceQuery, { "Get-IP": "get" });

    const handleDeviceQuery = (snapshot) => {
      const deviceInfo = snapshot.val();
      setDeviceState(deviceInfo);
    };

    const handleIPQuery = (snapshot) => {
      const ipInfo = snapshot.val();
      if (ipInfo !== "get") {
        ipcRenderer.send("connect", ipInfo);
      }
    };

    onValue(deviceQuery, handleDeviceQuery);
    onValue(ipQuery, handleIPQuery);

    const connectReplyHandler = (event, arg) => {
      if (arg === "Connected") setIsLoading(false);
    };
    ipcRenderer.on("connect-reply", connectReplyHandler);

    const timeout = setTimeout(() => {
      if (isLoading) {
        navigate("/headsets");
        toast.error(getTranslation("tryConnectingDirectly"));
        toast.error(getTranslation("connectionFailed"));
      }
    }, 20000); // 20 seconds

    return () => {
      clearTimeout(timeout);
    };
  }, [mac, isLoading]);

  useEffect(() => {
    ipcRenderer.on("screenshot-reply", (event, arg) => {
      console.log(arg + " " + Date.now());
      setUploadPath(arg);
      dispatchIsImageUpload({ type: "end" });
    });
    ipcRenderer.on("stop-screenrecord-reply", (event, arg) => {
      console.log(arg);
      setUploadPath(arg);
      dispatchIsImageUpload({ type: "end" });
      onOpen();
    });
  }, []);

  const getHighestProgress = (data) => {
    const result = {};
    data.forEach((item) => {
      const { exprimentId, progress } = item;
      if (!(exprimentId in result) || progress > result[exprimentId].progress) {
        result[exprimentId] = { exprimentId, progress };
      }
    });
    return Object.values(result);
  };

  if (error) console.log(error.message);

  useEffect(() => {
    let chemistryTotalProgress = 0;
    let physicsTotalProgress = 0;
    if (device && device?.deviceByMac?.student[0]?.studnetExpriment) {
      const highestProgressForEachExperiment = getHighestProgress(
        device.deviceByMac.student[0].studnetExpriment
      ) as any;
      console.log(device.deviceByMac.student[0].studnetExpriment);
      highestProgressForEachExperiment.forEach((expriment) => {
        if (expriment.exprimentId in physicsOptions) {
          physicsTotalProgress += expriment.progress;
        }
        chemistryTotalProgress += expriment.progress;
      });
      const chemistryTotal = chemistryTotalProgress / chemistryOptions.length;
      const physicsTotal = physicsTotalProgress / physicsOptions.length;
      setChemistryProgres(chemistryTotal);
      setPhysicsProgress(physicsTotal);
    }
  }, [device]);

  console.log(device);

  return (
    <div className=" ">
      <ControlCard
        icon="Headset"
        title="sidebar-headset"
        neasted={true}
        info="HeadsetPageDescription"
      />
      {loading || isLoading ? (
        <div className=" mt-[35%]">
          <Loading />
        </div>
      ) : (
        <div
          className="flex flex-col mt-6 items-center gap-y-6 pb-5"
          style={{
            direction: language === "ar" ? "rtl" : "ltr",
          }}
        >
          <div className="w-full flex  items-center gap-x-4">
            {device && (
              <FirstCard
                device={device.deviceByMac}
                deviceState={deviceState}
              />
            )}
            <SecondCard
              ipcRenderer={ipcRenderer}
              device={device.deviceByMac}
              dispatchIsImageUpload={dispatchIsImageUpload}
              onOpen={onOpenImage}
            />
          </div>
          <div className="w-full flex items-center gap-x-4">
            <ThridCard />
            <FourthCard
              chemistryProgres={chemistryProgres}
              physicsProgres={physicsProgres}
            />
          </div>
        </div>
      )}
      <UploadMoadl
        isOpen={isOpenImage}
        onOpenChange={onOpenChangeImage}
        isImageUploading={isImageUploading}
        uploadImagePath={uploadImagePath}
        facilityId={
          device?.deviceByMac?.student
            ? device?.deviceByMac.student[0]?.facilityId
            : undefined
        }
      />
      <UploadVideoModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isImageUploading={isImageUploading}
        uploadImagePath={uploadImagePath}
        facilityId={
          device?.deviceByMac?.student
            ? device?.deviceByMac.student[0]?.facilityId
            : undefined
        }
      />
    </div>
  );
};

export default HeadsetPage;
