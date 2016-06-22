"use strict";
var React = require('react');
var projectApi = require('../../api/projectApi');
var WorkListPage=require('./workListPage');


var WorkListPage=React.createClass({
    getInitialState:function () {
        return{projects:[]}
    },

    componentDidMount:function(){
        if(this.isMounted()){
            this.setState({projects: [{
                id: 'website-1',
                name: 'Portfolio',
                technology: 'Bootstrap'
            }, {
                id: 'website-2',
                name: 'Express API',
                technology: 'Node js'
            }, {
                id: 'website-3',
                name: 'E-Competition',
                technology: 'MEAN STack'
            }]});
        }
    },

    render:function (project) {
        
        return (
            <div> This is my Work Page
                <WorkListPage projects={this.state.projects} />
            </div>
        );
    }
});

module.exports=WorkListPage;