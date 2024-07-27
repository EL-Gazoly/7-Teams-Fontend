import { useState, useEffect } from 'react';
import ControlCard from '../../Components/ControlCard';
import CalendarIcon from '../../assets/LogsAsessts/calendar-month.svg';
import { Button, Pagination } from '@nextui-org/react';
import LogsTable from './_components/LogsTable';
import { useQuery } from '@apollo/client';
import { GETLOGS } from '../../graphql/LogsQuery';
import CalendarComponent from './_components/Calendar';
import { useDisclosure } from '@nextui-org/react';
import useTranslationStore from '@/stores/LanguageStore';
const LogsPage = () => {
  const { getTranslation } = useTranslationStore();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState(false);
  const [date, setDate] = useState();
  const [take, setTake] = useState(10);
  const [logs, setLogs] = useState([]);
  const [total, setTotal] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { loading, error, data } = useQuery(GETLOGS, {
    variables: {
      skip: (currentPage - 1) * 100,
      take: take,
    },
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (data) {
      setLogs(data.logs);
      if (data.logsCount) {
        setTotal(data.logsCount);
      }
    }
  }, [data]);

  if (error) return <p>{getTranslation('error')}</p>;

  const handlePageChange = (page) => {
    setTake(10);
    setCurrentPage(page);
  };

  return (
    <div className='w-full overflow pb-5'>
      <CalendarComponent
        isOpen={isOpen}
        onClose={onClose}
        date={date}
        setDate={setDate}
        setFilter={setFilter}
        filter={filter}
      />
      <ControlCard
        icon='System'
        title={getTranslation('systemLog')}
        neasted={false}
        info='logsPageDescription'
      />
      <div className='flex flex-col mt-4 gap-y-5'>
        <div className='w-full h-[104.28px] bg-[#F7F9FC] dark:bg-primary-dark rounded-lg flex items-center justify-start px-5'>
          <Button
            className='w-[131px] h-12 bg-[#444] gap-x-5 rounded-md text-white dark:bg-[#464A52]'
            onPress={onOpen}
          >
            <img src={CalendarIcon} alt="" />
            <span>{getTranslation('period')}</span>
          </Button>
        </div>

        <div className='w-full flex items-center justify-between'>
          <Pagination
            isCompact
            showControls
            total={Math.ceil(total / 100)}
            initialPage={1}
            page={currentPage}
            onChange={handlePageChange}
          />
          <span className='font-medium text-sm text-[#667085] dark:text-white'>
            {getTranslation('showing')} {((currentPage - 1) * 100) + 1}-{Math.min(currentPage * 100, total)} {getTranslation('from')} {total}
          </span>
        </div>

        <div className='w-full overflow-y-scroll'>
          <LogsTable
            data={data}
            setTake={setTake}
            loading={loading}
            logs={logs}
            currentPage={currentPage}
            date={date}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
};

export default LogsPage;