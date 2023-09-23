import React from 'react';
import './App.css';
import InfiniteScroll from './components/InfiniteScroll';

function App() {
  return (
   <div>
     <header className='App'>
       <h1>Infinite Scrolling Example</h1>
       <main>
         <InfiniteScroll />
       </main>
     </header>
   </div>
  );
}

export default App;
