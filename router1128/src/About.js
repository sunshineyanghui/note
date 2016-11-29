import React from 'react';
import { Link } from 'react-router';
class About extends React.Component{
  render(){

    return(
      <div className="container">
        <h2>about</h2>
        <div className="row">

              <div className="col-sm-6 col-md-4 col-xs-12">
                <div className="thumbnail">
                  <img src="https://raw.githubusercontent.com/sunshineyanghui/sunshineyanghui.github.io/master/images/t03.jpg" alt="..." />
                  <div className="caption">
                    <h3>Thumbnail label</h3>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p>
                      <a href="#" className="btn btn-primary" role="button">Button</a>
                       <a href="#" className="btn btn-default" role="button">Button</a>
                    </p>
                  </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 col-xs-12">
              <div className="thumbnail">
                <img src="https://raw.githubusercontent.com/sunshineyanghui/sunshineyanghui.github.io/master/images/t01.jpg" alt="..." />
                <div className="caption">
                  <h3>Thumbnail label</h3>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p>
                    <a href="#" className="btn btn-primary" role="button">Button</a>
                     <a href="#" className="btn btn-default" role="button">Button</a>
                  </p>
                </div>
              </div>
          </div>

          <div className="col-sm-6 col-md-4 col-xs-12">
            <div className="thumbnail">
              <img src="https://raw.githubusercontent.com/sunshineyanghui/sunshineyanghui.github.io/master/images/t02.jpg" alt="..." />
              <div className="caption">
                <h3>Thumbnail label</h3>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p>
                  <a href="#" className="btn btn-primary" role="button">Button</a>
                   <a href="#" className="btn btn-default" role="button">Button</a>
                </p>
              </div>
            </div>
        </div>

        </div>
      </div>
    )
  }
}

export default About;
