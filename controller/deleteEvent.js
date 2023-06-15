const { response } = require("express");
const Event = require('../models/Event');

const deleteEvent = async( req, res = response ) => {
    
    const eventId = req.query.id;
    const uid = req.query.uid;

    try {

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Event do not exist with that Id'
            });
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No permissions to delete this event'
            });
        }

        await Event.findByIdAndDelete( eventId );

        res.json({
            ok: true,
            msg: 'Event deleted'
        });
        
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msg: 'Yous should contact admin'
        });
    }

};

module.exports = {
    deleteEvent,
}