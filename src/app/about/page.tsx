'use client'

import Typewriter from 'typewriter-effect';

import Container from "@/app/_components/container";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Index() {

  return (
    <>
      <Container>
      <Box sx={{m:'auto', mt:5}}>
        <Box sx={{mb:10}}>
            <center>
                <Typography variant='h1' color="#f44336" sx={{fontWeight:"bold"}}>
                    <Typewriter
                      options={{
                        strings: ['About'],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                </Typography>
            </center>
        </Box>
      </Box>
      <Box sx={{mb:10}}>
        <p>Born in 1990, Bekasi, Indonesia</p>
        <p>Lives and works in Frankfurt, Germany</p>
        <p>&nbsp;</p>
        <Typography variant="h4" color="#f44336" sx={{mb:1, mt:2}}>EDUCATION</Typography>
        <p>[2024 - ]&nbsp;Fine Arts, Prof. Haegue Yang&nbsp;-&nbsp;Hochschule f&uuml;r Bildende K&uuml;nste - St&auml;delschule, Frankfurt - Germany</p>
        <p>[2008 - 2014] Bachelor of Education (B.Ed) - Visual Art Education Department - Universitas Negeri Jakarta, Jakarta - Indonesia</p>
        <p>&nbsp;</p>
        <Typography variant="h4" color="#f44336" sx={{mb:1, mt:2}}>SELECTED EXHIBITIONS/SCREENINGS</Typography>
        <p><br />[2024]&nbsp;</p>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <p>Jelajah Jala, Festival Komunitas Seni Media 2024,&nbsp;initiated by The Indonesian Ministry of Education, Culture, Research and Technology, Benteng Rotterdam, Kota Makassar - Indonesia</p>
        </li>
        </ol>
        <p>[2021]</p>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>Universal Iteration, Online Exhibition - initiated by Komunitas Salihara, Jakarta - Indonesia</div>
        </li>
        <li>
        <div>International Video Poetry Festival VideoBardo 25 years, International Videopoetry Festival Videobardo, Buenos Aires - Argentina</div>
        </li>
        <li>
        <div>Post Reality, Lahore Digital Arts Festival 2021, Lahore &ndash; Pakistan</div>
        </li>
        <li>
        <div>Working Memory - Unesa International Visual Art Exhibition, Online Exhibition - initiated by Universitas Negeri Surabaya, Surabaya - Indonesia</div>
        </li>
        </ol>
        <p>[2020]</p>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>Manifesto VII Pandemi, Online Exhibition - initiated by National Gallery of Indonesia, Jakarta - Indonesia</div>
        </li>
        <li>
        <div>Pameran Daring Solidaritas Perupa Indonesia Lawan Corona 2020, Online Exhibition initiated by The Ministry of Culture and Education of Indonesia, Jakarta - Indonesia</div>
        </li>
        </ol>
        <p>[2019]</p>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>INSTRUMENTA #2: MACHINE/MAGIC, National Gallery of Indonesia, Jakarta -Indonesia</div>
        </li>
        <li>
        <div>Wave of Tomorrow 2019, Jakarta - Indonesia</div>
        </li>
        <li>
        <div>32nd Festival Les Instants Vid&eacute;o, The Instants Vid&eacute;o Num&eacute;riques et Po&eacute;tiques, Ecole Sup&eacute;rieure d&rsquo;Art (Aix-en-Provence) Aix-en-Provence - France</div>
        </li>
        <li>
        <div>ART_UNLTD booth by Bekraf, Art Jakarta 2019, JCC Senayan, Jakarta - Indonesia</div>
        </li>
        <li>
        <div>Consciousness of Changing Climate - Discussion and Film Screening, Studio Khaled, Artists Without A Cause, Berlin - Germany</div>
        </li>
        <li>
        <div>Trans Human Code, Media Art Globale 2019, Komunitas Salihara, Jakarta - Indonesia</div>
        </li>
        </ol>
        <p>&nbsp;[2018]</p>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>Pameran Besar Seni Rupa 2018, Panji : Penguat Karakter Bangsa, Balai Kota Among Tani, Malang &ndash; Indonesia</div>
        </li>
        </ol>
        <p>[2017]</p>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>Jatim Biennale 2017, Taman Budaya Jawa Timur, Surabaya &ndash; Indonesia</div>
        </li>
        <li>
        <div>Nimman Film Festival 2017 (KLEX Overseas Program), Chiang Mai Art Conversation -Chiang Mai University Arts Center, Chiang Mai &ndash; Thailand</div>
        </li>
        </ol>
        <p>[2015]</p>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>AMNUA International Video Art Forum and Special Screening - The Vision of Asia (KLEX Overseas Program), AMNUA (Art Museum of Nanjing University of the Art), Nanjing - China</div>
        </li>
        <li>
        <div>KLEX 6th (Kuala Lumpur Experimental Film, Video and Music Festival) Pulse, Findars, Kuala Lumpur - Malaysia</div>
        </li>
        <li>
        <div>Digital Solution for Smart Cities, Screening, The Waterstone - Pavilion Intesa Sanpaolo, Expo 2015, Milan - Italy</div>
        </li>
        <li>
        <div>Incubarte 7 International Art Festival, MuVIM (Museu Valencia de la Il-lustracio I la Modernitat), Valencia &ndash; Spain</div>
        </li>
        <li>
        <div>Pameran Nusantara 2015 Art-Chipelago, National Gallery of Indonesia, Jakarta - Indonesia</div>
        </li>
        <li>
        <div>S[old] OUT, A Group Exhibition, Art:1, Art:1 Artspace by Mon D&eacute;cor, Jakarta &ndash; Indonesia</div>
        </li>
        </ol>
        <p>[2014]</p>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>Toride International Video Projection 2014 (Toride City Urban Development Through Walls), Public Art, JR Toride Train Station, Prefecture Ibaraki &ndash; Japan</div>
        </li>
        </ol>
        <p>[2012]</p>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>Stockholm Fringe Festival (STOFF) 2012, Kulturhuset, Stockholm &ndash; Sweden</div>
        </li>
        </ol>
        <p>[2011]</p>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>Creative&rsquo;s Creative&rsquo;s Crative&rsquo;s (3C&rsquo;S) 2011, Korean Culture Center, Jakarta &ndash; Indonesia</div>
        </li>
        </ol>
        <p>&nbsp;</p>
        <Typography variant="h4" color="#f44336" sx={{mb:1, mt:2}}>AWARDS</Typography>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>3rd Place Best Students&rsquo; Artwork Production in Final Degree Project Fine Art Category of 2015 Universitas Negeri Jakarta, Jakarta - Indonesia</div>
        </li>
        </ol>
        <p>&nbsp;</p>
        <Typography variant="h4" color="#f44336" sx={{mb:1, mt:2}}>COMMISSION PROJECTS</Typography>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>Tapak Puya, Jelajah Jala, Festival Komunitas Seni Media 2024,&nbsp;commissioned by The Indonesian Ministry of Education, Culture, Research and Technology, Benteng Rotterdam, Kota Makassar - Indonesia</div>
        </li>
        <li>
        <div>Re-imagining Tribhuwana, Wave of Tomorrow 2019</div>
        </li>
        </ol>
        <p>&nbsp;</p>
        <Typography variant="h4" color="#f44336" sx={{mb:1, mt:2}}>OTHER PROJECTS</Typography>
        <ol className="list-decimal my-6 list-outside ml-20">
        <li>
        <div>[2022 - presents] Biodiversity archivist and documentation, lake Setu Patok Cirebon conservation - Studiofru | Green Project&nbsp;<a title="https://www.studiofrugreenproject.com" href="https://www.studiofrugreenproject.com/">https://studiofrugreenproject.com</a></div>
        </li>
        <li>
        <div>[2022] Data Analyst Consultant for Yayasan Wangsakerta, ISBS &amp; Pemerintah Desa Kedungrejo, Banyuwangi - Jawa Timur</div>
        </li>
        <li>
        <div>&nbsp;[2021 - presents] Web design and development for Yayasan Wangsakerta&nbsp;<a title="https://www.yayasanwangsakerta.org" href="https://www.yayasanwangsakerta.org/">https://www.yayasanwangsakerta.org&nbsp;</a></div>
        </li>
        </ol>  
        </Box> 
      </Container>
    </>
  );
}