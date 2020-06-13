import React, { Component } from 'react';
import Brewquery from "../components/images/brewquery.jpg";
import CodeQuiz from "../components/images/code-quiz.jpg";
import CodeRefactor from "../components/images/code-refractor.jpg";
import Egl from "../components/images/egl.png";
import PasswordGenerator from "../components/images/password-generator.jpg";
import ResponsivePortfolio from "../components/images/responsive-portfolio.jpg";
import WorkDayScheduler from "../components/images/work-day-scheduler.jpg";
import WeatherDashboard from "../components/images/weather-dashboard.jpg";



export default class Projects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-work" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">My Work</span>
                                <h2 className="colorlib-heading animate-box">Projects</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${Brewquery})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/THE-PACK">Brewquery</a></h3>                                     
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${CodeQuiz})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/kimiinglet/meanLeanFreakGoat">CodeQuiz</a></h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
                                <div className="project" style={{ backgroundImage: `url(${CodeRefactor})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/World-Capitals-Quiz">Code Refactor</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
                                <div className="project" style={{ backgroundImage: `url(${Egl})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/Day-Planner">Essiential Good Locator</a></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{ backgroundImage: `url(${PasswordGenerator})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/dev-profile-generator">Password Generator</a></h3>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${ResponsivePortfolio})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/Employee-Tracker">Responsive Portfolio</a></h3>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${WeatherDashboard})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/Note-Taker">Weather Dashboard</a></h3>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{ backgroundImage: `url(${WorkDayScheduler})` }}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/cml2377/Superb-Pass-Gen">Work Day Scheduler</a></h3>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                   
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <p><a href="https://github.com/cml2377" className="btn btn-primary btn-lg btn-load-more">See More <i className="icon-reload" /></a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}