import React from 'react';
import  { useRef ,useEffect,useState} from 'react';
import './App.css';

import { Fade } from 'react-reveal';





import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Icon,
  Menu,
  Segment,
  Progress,
  Button,
  Flag
} from 'semantic-ui-react';
import img from "./img.png";

function FixedMenuLayout () {
  const section1Ref = useRef(null);
  const main = useRef(null);
  //const [isFadeEnabled, setIsFadeEnabled] = useState(true);

const experience = useRef(null);

  const scrollToSection = (ref) => {

    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  


return (
  <div ref={main}>
    
  <Segment>
    
    <Menu fixed='top' inverted>
      <Menu.Menu position='left'>
        <Menu.Item name='PERSONAL PAGE' />
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Menu.Item name='COMPÉTENCES' as='a'  onClick={() => scrollToSection(section1Ref)} />
        <Menu.Item name='EXPÉRIENCES' as='a' onClick={() => scrollToSection(experience)} />
      </Menu.Menu>
    </Menu>
  </Segment>
         

  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

    <div style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '50%', marginBottom: '10px' }}>
      <Image src={img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <h3 style={{ margin: '0' }}>BEN ALAYA Farouk</h3>
    <h6 style={{ margin: '0' }}>EMBEDDED SOFTWARE DEVELOPER</h6>
    <div style={{ marginTop: '1em' }}>
      <a href='https://github.com/farouk527' target='_blank'>
        <Icon name='github' size='big' link />
      </a>
      <a href='https://instagram.com/farouk_ben_alaya?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=IwAR3U1cF-OBMAUksvpfTXefBYPb6N4xHlHNgguX8W9fdcsNjH_x3Fy_Ip-KM' target='_blank'>
        <Icon name='instagram' size='big' link />
      </a>
      <a href='https://www.linkedin.com/in/fbenalaya/' target='_blank'>
        <Icon name='linkedin' size='big' link />
      </a>
    </div>
  </div>


  <Segment style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)', padding: '1em' }}>
    <Fade left  >
    <Grid columns={2} divided>
      <Grid.Column>
        <Header color='red'>INFORMATIONS PERSONNELLES</Header>
        <List>
          <List.Item>
            <List.Icon name='user' />
            <List.Content>
              <strong>Nom:</strong> Ben Alaya Farouk
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='calendar' />
            <List.Content>
              <strong>Age:</strong> 23
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='mail' />
            <List.Content>
              <strong>Email:</strong> benalayafarouk5@gmail.com
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='phone' />
            <List.Content>
              <strong>Tél:</strong> +33780572700
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='map marker' />
            <List.Content>
              <strong>Addresse:</strong> 18 RUE DE VANNES, 29200 BREST 
              <Flag name='france' />
            </List.Content>
          </List.Item>
        </List>
      </Grid.Column>
      <Grid.Column>
        <Header color='red'>À PROPOS</Header>
        <p>
        En tant qu'étudiant en Master 2, je suis animé par une motivation inébranlable et une volonté constante de perfectionner mes compétences. Ma conviction en la valeur de l'apprentissage progressif pour atteindre mes objectifs m'inspire au quotidien. De plus, je porte un profond intérêt à la collaboration en équipe, car je crois en son potentiel pour renforcer mes connaissances de manière significative. Mon désir ardent est de m'engager activement dans le monde professionnel, et c'est pourquoi je suis actuellement à la recherche d'une opportunité de stage en Master 2 pour conclure mes études de manière épanouissante.
        </p>
      </Grid.Column>
    </Grid>
    </Fade>
    
  </Segment>


  <Segment
        style={{ boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.5)', padding: '1em' }}
      
        
      > 
      <div ref={section1Ref}></div>
      <Fade left>  

      <div >
       <Grid columns={2} divided >
      <Grid.Column>
        <h3>COMPÉTENCES EN SYSTÈMES EMBARQUER </h3>
        <div  >
          <Header as='h4' content="C" />
          <Progress percent="80" size='small' color='red' />
          <Header as='h4' content="C++" />
          <Progress percent="70" size='small' color='red' />
          <Header as='h4' content="AADL (aadl inspector) \ ocarina" />
          <Progress percent="80" size='small' color='red' />
          <Header as='h4' content="ADA (temp réel)" />
          <Progress percent="75" size='small' color='red' />
          <Header as='h4' content="VHDL (FPGA\zedboard zynq) \ Vivado (Xilinix)" />
          <Progress percent="80" size='small' color='red' />
          <Header as='h4' content="LINUX" />
          <Progress percent="80" size='small' color='red' />
          <Header as='h4' content="ARDUINO \ESP32 \ HiveMQ \ MQTT" />
          <Progress percent="75" size='small' color='red' />
          <Header as='h4' content="OPENMP \ OPENCL \ SYCL " />
          <Progress percent="65" size='small' color='red' />
          <Header as='h4' content="ANDROID" />
          <Progress percent="65" size='small' color='red' />

          <Header as='h4' content="SPI \ I2C \ UART \ SpaceWire RMAP" />
          <Progress percent="70" size='small' color='red' />
          
        </div>
      </Grid.Column>
      <Grid.Column>
        <h3>COMPÉTENCES EN DÉVELOPPEMENT WEB</h3>
        <div>
          <Header as='h4' content="NODE JS" />
          <Progress percent="80" size='small' color='black' />
          <Header as='h4' content="REACT JS" />
          <Progress percent="85" size='small' color='black' />
          <Header as='h4' content="EXPRESS JS" />
          <Progress percent="80" size='small' color='black' />
          <Header as='h4' content="MONGO DB - MY SQL" />
          <Progress percent="75" size='small' color='black' />
          <Header as='h4' content="HTML-CSS-JAVA SCRIPT" />
          <Progress percent="80" size='small' color='black' />
          <Header as='h4' content="JUnit \ UML" />
          <Progress percent="70" size='small' color='black' />
          <Header as='h4' content="JAVA" />
          <Progress percent="70" size='small' color='black' />
          <Header as='h4' content="Cryptographie (OpenSSL,AES,DES,SHA256,RSA) " />
          <Progress percent="60" size='small' color='black' />
          
        </div>
    
      </Grid.Column>
    
    </Grid>
    </div>
    </Fade>
  </Segment>

  <Segment>
  <div ref={experience}></div>
  <Fade left>
   
    <Container>
      <Header as='h2' content='Expériences Professionnelles' />

      <Segment>
      
    <Header as='h4' content='Stagiaire R&D' subheader='Lab-STICC Financé par Thales' />
    <List>
        <List.Item>
            <strong>Date:</strong> Avril 2023 - Juillet 2023
        </List.Item>
        <List.Item>
            <strong>Description: <br/> - Programmation d’architectures hétérogènes avec SYCL et C++. <br/>
            - Réalisation d'un état de l'art sur les implémentations de SYCL. <br/>
            - Étude comparative de différentes bibliothèques de traitement de signal et d'algèbre linéaire sur différentes implémentations de SYCL (C++). <br/>
            - Implémentation d'un ensemble de programmes de calcul intensif représentatifs sur le DevCloud d'Intel.
            </strong>
        </List.Item>
    </List>
   
</Segment>





      <Segment className='seg'>
   
        <Header as='h4' content='STAGE DE FIN ÉTUDES ( développement web )'  subheader='Linedata' />
        <List>
          <List.Item>
            <strong>Date:</strong> June 2019 - December 2020
          </List.Item>
          <List.Item>
            <strong>Description: <br/>  
            -développement d'une application web interactif utilisant "charts and grids".<br/>
         -Importation d'un fichier "xlsx ou Csv.." et à travers celui-ci nous assurons la création d'un widget (charts or grids).<br/>
         -Création d'une authentification avec Okta authetication. Création d'une interface permettant aux utilisateurs de créer son propre dashboard à partir de ces "charts et grids" avec la Gestion de base de données.<br/>
         -technologies utilisées : React js , express js , nodes js , MongoDB<br/>
        -Méthodologie de travail : agile scrum <br/>
              
              
              </strong> 
          </List.Item>
        </List>
      </Segment>
    </Container>
    </Fade>
  </Segment>

  <Segment>
  <Fade left>
    <Container>
      <Header as='h2' content='Projets Académiques' />

      <Segment className='in-progress'>
    <Header as='h4' content='Projet SpaceWire et Simulation RMAP' subheader='Réalisations' />
    <List>
        <List.Item>
            - Développement d'un algorithme de simulation RMAP en VHDL.
        </List.Item>
        <List.Item>
            - Évaluation des temps d'accès à la mémoire partagée au sein d'un réseau SpaceWire.
        </List.Item>
        <List.Item>
            - Utilisation d'un framework de simulation du réseau SpaceWire.
        </List.Item>
        <List.Item>
        - Réalisation de mesures "réelles" en implantant le modèle de routeur sur le PSoC Zynq d'une carte ZedBoard        </List.Item>
    </List>
</Segment>


      <Segment className='seg'>
    <Header as='h4' content="Création d'une Application IoT pour la Surveillance de la Météo" subheader='Projet Météo IoT' />
    <List>
        <List.Item>
            <strong>Technologies : C, ESP32, HiveMQ, DHT22, React.js, Node.js, MQTT</strong>
        </List.Item>
        <List.Item>
            - Création d'une application IoT qui récupère des données météorologiques. 
        </List.Item>
        <List.Item>
            - Transfert en temps réel de données météorologiques vers HiveMQ via une communication Wi-Fi. 
        </List.Item>
        <List.Item>
            - Visualisation Instantanée des Données Météorologiques sur une Interface graphique. 
        </List.Item>
    </List>
</Segment>

<Segment>
    <Header as='h4' content='Détection des surfaces sèches, vertes et aquatiques'  />
    <List>
        <List.Item>
            <strong>Technologies : OpenCL (C/C++)</strong>
        </List.Item>
        <List.Item>
            - Détection de surfaces sèches, vertes et aquatiques sur une image satellite 2D. 
        </List.Item>
        <List.Item>
            - Utilisation du parallélisme de données sur GPUs avec OpenCL (C/C++). 
        </List.Item>
        <List.Item>
            - traitement d'image et programmation parallèle sur GPU.
        </List.Item>
    </List>
</Segment>

<Segment>
    <Header as='h4' content="Développement d'une application web de gestion de tâches " subheader='Projet de Gestion de Tâches Web' />
    <List>
        <List.Item>
            <strong>Technologies : React, Node.js, Express.js, MongoDB (full-stack js)</strong>
        </List.Item>
        <List.Item>
            - Mise en place d'un système d'authentification sécurisé avec token. 
        </List.Item>
        <List.Item>
            - Conception et développement de bases de données MongoDB pour stocker les tâches et les comptes d'utilisateur. 
        </List.Item>
        <List.Item>
            - Développement d'une interface graphique et l'implémentation de fonctionnalités de gestion de tâches telles que la création, la modification et la suppression de tâches. 
        </List.Item>
    </List>
</Segment>
    </Container>
    </Fade>
  </Segment>


  <Segment>
  <Fade left>
    <Container>
      <Header as='h2' content='Parcours Académique' />

      <Segment className='in-progress'>
        <Header as='h4' content='UFR Sciences et Technique - Université De Bretagne Occidentale UBO' subheader='09/2022 - 09/2024, Brest, France' />
        <List>
          <List.Item>
          Master Informatique Parcours Logiciels pour les
          Systèmes Embarqués
          </List.Item>
         
        </List>
      </Segment>

   

      <Segment>
        <Header as='h4' content="Institut Supérieur d'Informatique - Université De Tunis el Manar" subheader='10/2018 - 06/2021, Tunis Manar, Tunisie' />
        <List>
          <List.Item>
            1 Ére Année Cycle Ingénieur
          </List.Item>
        </List>
      </Segment>

      <Segment className='seg'>
        <Header as='h4' content="Institut Supérieur d'Informatique - Université De Tunis el Manar" subheader='09/2021 - 06/2022, Tunis, Tunisie' />
        <List>
          <List.Item>
          Diplôme national de licence Appliquée Systèmes
            Informatiques Embarqués       
          </List.Item>
        </List>
      </Segment>
    </Container>
  </Fade>
</Segment>

































  
  <Button icon='arrow alternate circle up outline'  onClick={() => scrollToSection(main)}></Button>


  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '2em 0em' }}>
    <Container textAlign='center'>
      <p>&copy; 2023 BEN ALAYA Farouk. All rights reserved.</p>
    </Container>
  </Segment>

</div>
)
 
};

export default FixedMenuLayout;
