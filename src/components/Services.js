import React, { Component } from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title.js'; 

export default class Services extends Component {
    state={
        services: [
            {
                icon:<FaCocktail />,
                title:"Free cocktails",
                info: 'Hi I am in services block, kjfdh njksd jsdj jksd kjsd nskjd jkdj kjdakjshd dkjsahd skdsa'
            },
            {
                icon:<FaHiking />,
                title:"Endles Hiking",
                info: 'Hi I am in services block, kjfdh njksd jsdj jksd kjsd nskjd jkdj kjdakjshd dkjsahd skdsa'
            },
            {
                icon:<FaShuttleVan />,
                title:"Free Shuttle",
                info: 'Hi I am in services block, kjfdh njksd jsdj jksd kjsd nskjd jkdj kjdakjshd dkjsahd skdsa'
            },
            {
                icon:<FaBeer />,
                title:"Strongest Beer",
                info: 'Hi I am in services block, kjfdh njksd jsdj fhjf kjsahf kjhdskj kjfha jksd kjsd nskjd jkdj kjdakjshd dkjsahd skdsa'
            }
        ]
    }
    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className='services-center'>
                    {this.state.services.map((item, index) => {
                        return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        )
                    })}
                </div>
            </section>
        )
    }
}
