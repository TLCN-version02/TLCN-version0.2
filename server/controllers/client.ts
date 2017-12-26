import Client from '../models/client';
import BaseCtrl from './base';

export default class ClientCtrl extends BaseCtrl {
    model = Client;
      // Get by event
    getevent = (req, res) => {
        this.model.find({ event: req.params.id }, (err, docs) => {
            if (err) { return console.error(err); }
                res.status(200).json(docs);
        });
    }
}
