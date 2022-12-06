// import { data } from "../../../data/data"
import activities from '../../data/activities.json';
import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(activities)
  }

  if (req.method === 'POST') {
    const { body } = req;
    activities.activities.push({...body, id: activities.activities.length + 1});

    fs.writeFileSync('../../data/activities.json', JSON.stringify(activities, null, 2))

    return res.status(200).json(activities);
  }
}
