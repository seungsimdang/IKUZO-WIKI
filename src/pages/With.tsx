import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import { getDataBySnapshot, getDataByTimestamp, setData } from '../utils/util';
import WithComponent from '../components/wiki/With';

export interface Root {
  id: string;
}

const With = (): JSX.Element => {
  const [datas, setDatas] = useState<Root[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataByTimestamp('with-collection', 'time');
      if (data) {
        setDatas(data);
      }
    };

    fetchData();

    getDataBySnapshot('with-collection', setDatas);
  }, []);

  return (
    <>
      <Header />
      <WithComponent data={datas} />
    </>
  );
};

export default With;
