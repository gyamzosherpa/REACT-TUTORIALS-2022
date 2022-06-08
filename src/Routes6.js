import React from 'react';
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom';
import App from './App';
import MultipleReturn from './components/conditionalRendering/MultipleReturn';
import ShowHide from './components/conditionalRendering/ShowHide';
import TernaryOperator from './components/conditionalRendering/TernaryOperator';
import ControlInput from './components/todo/ControlInput';
import BirthdayApp from './components/projects/01-birthdayReminder/Birthday';
import TourApp from './components/projects/02-toursList/TourApp';
import ReviewApp from './components/projects/03-reviews/ReviewApp';
import AccordionApp from './components/projects/04-accordion/AccordionApp';
import MenuApp from './components/projects/05-menuItem/MenuApp';
import ExperienceApp from './components/projects/06-experienceApp/ExperienceApp';
import BookList from './components/props/BookList';
import PlayerList from './components/props/PlayerList';
import UseEffect1 from './components/reactHooks/useEffect/UseEffect1';
import UseEffectFetch from './components/reactHooks/useEffect/UseEffectFetch';
import UseState1 from './components/reactHooks/useState/UseState1';
import UseStateArray from './components/reactHooks/useState/UseStateArray';
import UseStateCounter from './components/reactHooks/useState/UseStateCounter';
import UseStateObject from './components/reactHooks/useState/UseStateObject';
import UseRef from './components/useRef/UseRef';
import UseReducer from './components/useReducer/UseReducer';
import TodoApp from './components/projects/07-todoApp/TodoApp';

const Routes6 = () => {
  return (
    <>
      <Routers>
        <Routes>
          <Route exact path="/" element={<App />} />

          {/*.................... props drilling ......................*/}

          <Route exact path="bookList" element={<BookList />} />
          <Route exact path="playerList" element={<PlayerList />} />

          {/*.................... react hooks ......................*/}

          <Route exact path="useState" element={<UseState1 />} />
          <Route exact path="usestateArray" element={<UseStateArray />} />
          <Route exact path="usestateObject" element={<UseStateObject />} />
          <Route exact path="usestateCounter" element={<UseStateCounter />} />

          <Route exact path="useEffect" element={<UseEffect1 />} />
          <Route exact path="useEffectFetch" element={<UseEffectFetch />} />

          <Route exact path="useReducer" element={<UseReducer />} />

          <Route exact path="useRef" element={<UseRef />} />

          {/*.................... conditional Rendering ......................*/}

          <Route exact path="multipleReturn" element={<MultipleReturn />} />
          <Route exact path="ternaryOperator" element={<TernaryOperator />} />
          <Route exact path="showHide" element={<ShowHide />} />

          {/*.................... todo ......................*/}

          <Route exact path="controlInput" element={<ControlInput />} />

          {/*.................... projects ......................*/}

          <Route exact path="tourApp" element={<TourApp />} />
          <Route exact path="birthdayApp" element={<BirthdayApp />} />
          <Route exact path="accordionApp" element={<AccordionApp />} />
          <Route exact path="reviewApp" element={<ReviewApp />} />
          <Route exact path="menuApp" element={<MenuApp />} />
          <Route exact path="experienceApp" element={<ExperienceApp />} />
          <Route exact path="todoApp" element={<TodoApp />} />
        </Routes>
      </Routers>
    </>
  );
};

export default Routes6;
