import ProfilePic from './IMG/FotoPerfil.jpg';
import './App.css';
import Skills from './skills';
import Experiencia from './experiencia';
import Education from './education';
import Description from './Description';
import { SocialIcon } from 'react-social-icons';
import PersonalData from './DATA/infopessoal.json';
import Linguas from './linguas';
import Flag from 'react-world-flags';

function MyAge(birth_date,social_status,nacionality,flag_code){
  const birthday = new Date(birth_date);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return(
    <div>
      <Flag code={flag_code} height="30px"/>
      <p>{nacionality}, {age} anos, {social_status}.</p>
      
    </div>
  );
}

function InformacoesPessoais({ InfoPessoal }) {
  const { contacts } = InfoPessoal;

  const renderContactInfo = (contact, index) => {
    try {
      // Check if the platform is 'email' and throw an error if it is
      if (contact.platform === 'email') {
        throw new Error('Email platform is not supported for display.');
      }

      const url = contact.link;
      return (
        <div key={index} className="social-icon">
          <SocialIcon url={url} target='__blank'/>
        </div>
      );
    } catch (error) {
      // Display platform and link on error
      return (
        <div key={index} className="social-icon">
          <p>{`${contact.platform}: ${contact.link}`}</p>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>INFORMAÇÕES PESSOAIS</h2>
      <div className="social-icons-container">
        {contacts.map(renderContactInfo)}
      </div>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={ProfilePic} alt="Profile Foto" style={{ height:"350px"}}/>
        <h1 className='NameProfile'>{PersonalData.InfoPessoal.name}</h1>
        <p className='myage_social_status'>{MyAge
          (
           PersonalData.InfoPessoal.birth_date,PersonalData.InfoPessoal.social_status,PersonalData.InfoPessoal.nacionalidade,PersonalData.InfoPessoal.nacionalidade_code
          )}
        </p>
        <div>
          <Description/>
        </div>
      </header>
      <body>
        <div>
          <Experiencia/>
        </div>
        <div>
          <Education/>
        </div>
        <div>
          <Linguas/>
        </div>
        <div>
          <Skills/>
        </div>
        <div className="RodaPe">
          {InformacoesPessoais(PersonalData)}
          <div>
            <input class="styled" type="button" value="DOWNLOAD PDF" disabled/>          
          </div>
        </div>

      </body>
    </div>
  );
}

export default App;
