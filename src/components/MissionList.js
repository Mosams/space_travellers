/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Mission from './Mission';
import { getMissions } from '../services/spaceXAPI';

const MissionList = (() => {
  const missions = useSelector((state) => state.missionReducer.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch]);

  return (
    <table className="min-w-full table-auto">
      <thead className="bg-white border-b">
        <tr>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Mission
          </th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Description
          </th>
          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((data) => (
          <Mission
            key={data.mission_id}
            name={data.mission_name}
            description={data.description}
          />
        ))}
      </tbody>
    </table>
  );
});

export default MissionList;
