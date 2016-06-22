"use strict";

//This file is mocking a web API by hitting hard coded data.
var projects = require('./projectData.js').projects;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(project) {
    return project.name.toLowerCase() + '-' + project.technology.toLowerCase();
};

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var projectApi = {
    getAllprojects: function() {
        return _clone(projects);
    },

    getprojectById: function(id) {
        var project = _.find(projects, {
            id: id
        });
        return _clone(project);
    },

    saveproject: function(project) {
        //pretend an ajax call to web api is made here
        console.log('Pretend this just saved the project to the DB via AJAX call...');

        if (project.id) {
            var existingprojectIndex = _.indexOf(projects, _.find(projects, {
                id: project.id
            }));
            projects.splice(existingprojectIndex, 1, project);
        } else {
            //Just simulating creation here.
            //The server would generate ids for new projects in a real app.
            //Cloning so copy returned is passed by value rather than by reference.
            project.id = _generateId(project);
            projects.push(project);
        }

        return _clone(project);
    },

    deleteproject: function(id) {
        console.log('Pretend this just deleted the project from the DB via an AJAX call...');
        _.remove(projects, {
            id: id
        });
    }
};

module.exports = projectApi;