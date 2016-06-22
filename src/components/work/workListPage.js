var React = require('react');

var WorkList=React.createClass({
   PropTypes:{
      projects:React.propTypes.array.isRequired
   },
    render:function (project) {

        var renderProjectRow= function (project) {
            return(
                <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>{project.technology}</td>
                </tr>
            )
        }
        return (
            <div> This is my Work Page
                <table className="table">
                    <tr>
                        <th>Name</th>
                        <th>Technology</th>
                    </tr>
                    <tbody>
                    {this.props.projects.map(renderProjectRow,this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports=WorkList;