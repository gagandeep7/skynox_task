/** @jsx jsx */
import { jsx, css, Global } from '@emotion/core';
import { Grid } from '@chakra-ui/core';
import CompanyLogo from './Components/CompanyLogo';
import StreamIcons from './Components/StreamIcons';
import Search from './Components/Search';
import NavMenu from './Components/NavMenu';
import PopularWeek from './Components/PopularWeek';
import IllustrationGrid from './Components/IllustrationGrid';
import ProfileStats from './Components/ProfileStats';
import TopTutors from './Components/TopTutors';
import Special from './Components/Special';

const App = () => (
  <div>
    <Global
      styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding:0;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
              Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
              sans-serif;
            font-size: 62.5%
            line-height: 1.4;
              h1,h2,h3,h4,h5,h6 {
                line-height : 1.1 ;
                + * {
                  margin-top : 0.5rem
                }
              }
          }
        `}
    />
    <Grid gridTemplateColumns="2fr 4fr 3fr" mt="40px" mx="50px">
      <CompanyLogo />
      <StreamIcons />
      <Search />
      <NavMenu />
      <PopularWeek />
      <IllustrationGrid />
      <ProfileStats />
      <TopTutors />
      <Special />
    </Grid>
  </div>
);

export default App;
