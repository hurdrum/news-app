import React, {useState } from 'react';

import './index.scss' 
import Card from '../Card';

import DB from '../article.json'


const Timeline = ({news = Array(20).fill(DB.article)}) => {
    const [isActive, setActive] = useState(true);

    let prevScroll = window.pageYOffset;
    window.addEventListener('scroll', function() {
        let currentScroll = window.pageYOffset;
        setActive(prevScroll > currentScroll);
        prevScroll = currentScroll;
      })
    
    return(
        <aside className='timeline'>
            <div className={isActive ? "timeline__wrapper" : "timeline__wrapper timeline__wrapper_active"}>
                <h4>Лента</h4>
                <div className="timeline__news">
                    {
                        news.map((article, i) =>
                            <Card key={i} article={article} type='only-title'></Card>
                        )
                    }

                </div>
            </div>
            
        </aside>
    );
  }
  
  export default Timeline;