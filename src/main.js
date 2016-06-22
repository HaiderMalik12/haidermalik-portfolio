$ = jQuery = require('jquery');
var React = require('react');

/*React Components*/
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');
var Work = require('./components/work/workPage');
var Blog = require('./components/blog/blogPage');
var Contact = require('./components/contact/contactsPage');


(function(win) {
	"use strict";
	var App = React.createClass({
		render: function() {
			var Child;

			switch(this.props.route) {
				case 'about': Child = About; break;
				case 'contact': Child = Contact; break;
				case 'work': Child = Work; break;
				case 'blog': Child = Blog; break;
				default: Child = Home;
			}

			return (
				<div>
					<Header/>
					<Child/>
				</div>
			);

		}
	});

	function render() {
		var route = window.location.hash.substr(1);
		React.render(<App route={route} />, document.getElementById('app'));
	}

	window.addEventListener('hashchange', render);
	render();
})(window);