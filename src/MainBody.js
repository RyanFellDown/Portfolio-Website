import './MainBody.css';
import SCULogo from './images/SCULogo.jpg'
import UCILogo from './images/UCILogo.png'
import CooledturedLogo from './images/CooledturedLogo.png'
import FPS_Classification from './images/FPS_Classification_Image.png'
import Game_Sim_Soft from './images/kmeans.png'
import Steam_Rec_Soft from './images/Steam_Rec_Image.png'
import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring';

function MainBody() {

  return (
      <div className = "mainPage">
        <div className = "header">
          <div className = "name">
            Hi, I'm Ryan!
          </div>
          <br />
          <br />
          <div className = "headerText">
            I'm an undergraduate fourth year Computer Science major currently attending school at Santa Clara University.
            I'm looking for an full time job in a computer science related field, and currently furthering my front-end development and data science skills.
            <br />
            <br />
            When I'm not coding, I love speedrunning FPS games, playing pickup basketball, lifting, learning about biology, and reading fantasy novels.
          </div>

          <div className = "Titles">
            Experience
          </div>
          <div id="InnerSection">
            <div className = "InsideSection">
              <div className='Image1Container'>
                <img src={SCULogo} className = "Experience1Image"/>
              </div>
              <div className = "InnerTitles">
                SCU Imaginarium
              </div>
              <div className = "InnerText">
                - Contributed research in deep learning, computer vision, and pose estimation for egocentric modeling projects.
                <br />
                <br />
                - Developed Python scripts for data preprocessing and 3D motion capture visualization using Blender.
                <br />
                <br />
                - Furthered research on Gaussian Splatting and related methods to create 3D and 4D models.
              </div>
            </div>
            <div className = "InsideSection">
              <div className='Image2Container'>
                <img src={UCILogo} className = "Experience2Image"/>
              </div>
              <div className = "InnerTitles">
                UCI School of Business
              </div>
              <div className = "InnerText">
                - Aided analysis on AI adoption and usage over time through large-scale scraping of 2,000+ open-source GitHub projects.
                <br />
                <br />
                - Implemented automated data pipelines using Python and Selenium to scrape features from each repository.
                <br />
                <br />
                - Organized and parsed scraped information into Parquet files to return formatted information on the repositories.
              </div>
            </div>
            <div className = "InsideSection">
              <div className='Image3Container'>
                <img src={CooledturedLogo} className = "Experience3Image"/>
              </div>
              <div className = "InnerTitles">
                Cooledtured
              </div>
              <div className = "InnerText">
                - Leveraged HTML and CSS to generate web mockups of proposed features from low-fidelity Figma designs.
                <br />
                <br />
                - Conducted user analysis using SWOT analysis, competitive analysis, and affinity mapping.
                <br />
                <br />
                - Collaborated with a dev team to extend existing website functionality and prototype new site features.
              </div>
            </div>
          </div>



          <div className = "Titles">
            Projects
          </div>
          <div id="InnerSection">
            <div className = "InsideSection">
              <div className='Image1Container'>
                <img src={FPS_Classification} className = "Experience1Image"/>
              </div>
              <div className = "InnerTitles">
                FPS Aim Classification
              </div>
              <div className = "InnerText">
                - Created FPS aim training environment in Godot recording several features and exporting these to CSVs.
                <br />
                <br />
                - Combined and preprocessed supervised CSV data using Python scripts for machine learning models.
                <br />
                <br />
                - Tested Random Forest, KNN, and SVM models via Scikit-Learn to select the best model for aim classification.
              </div>
            </div>
            <div className = "InsideSection">
              <div className='Image2Container'>
                <img src={Game_Sim_Soft} className = "Experience2Image"/>
              </div>
              <div className = "InnerTitles">
                Game Similarity Software
              </div>
              <div className = "InnerText">
                - Developed a python script to preprocess CSV files into a cleaned, singular file for a machine learning model.
                <br />
                <br />
                - Implemented K-Means to group games by similar values based on tested cluster and low inertia values.
                <br />
                <br />
                - Collaborated with other students to implement a KNN algorithm determining the closest games to the user’s preferences within the highest correlated cluster.
              </div>
            </div>
            <div className = "InsideSection">
              <div className='Image3Container'>
                <img src={Steam_Rec_Soft} className = "Experience3Image"/>
              </div>
              <div className = "InnerTitles">
                Steam Recommendation Web App
              </div>
              <div className = "InnerText">
                - Deployed a full-stack recommendation engine using Vercel and Render based on a user’s game preference.
                <br />
                <br />
                - Built a React.js frontend that accepts a user’s game preference and reports calculated game recommendations.
                <br />
                <br />
                - Implemented an API using Flask that algorithmically performs similarity analysis between the user’s input game preference and Steam game data.
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default MainBody;