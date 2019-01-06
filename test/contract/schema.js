'use strict';
const Joi = require('joi');

const arrayEntries = Joi.object({
    startTime: Joi.string().required(),
    endTime: Joi.string().required(),
    activityId: Joi.number().integer().positive().required(),
    activityDescription: Joi.string().required(),
    entryHours: Joi.number().integer().positive().required(),
    notes: Joi.string()
    }).required();

const schemaTimeslot = Joi.object({
        totalIntervalTime: Joi.number().integer().positive(),
        days: Joi.object().pattern(/\w/, Joi.object().keys({
            date: Joi.string().required(),
            totalDayTime: Joi.number().integer().positive().required(),
            entries: Joi.array().items(arrayEntries)
})).required(),
})

module.exports = {
    schemaTimeslot
   }




