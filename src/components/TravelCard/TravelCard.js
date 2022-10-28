import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './TravelCard.module.scss'

/**
 * container untuk tampilan travel
 * @param {{cards:{name: string, url: string, image:string}[]}} props 
 */
const TravelCardContainer = (props)=>{
    const [unravel, setUnravel] = useState(-1);

    const cardElements = props.cards.map((card, index)=>{
        return <TravelCard 
            name={card.name}
            url={card.url}
            image={card.image}
            key={index}
            hidden={(index > unravel)}
        />
    })

    useEffect(()=>{
        const to = setTimeout(()=>{
            setUnravel(unravel === cardElements.length - 1 ? cardElements.length - 1 : unravel + 1);
        }, 100)
        return () => clearTimeout(to);
    }, [cardElements.length, unravel])

    return (
        <div className={styles.travelCardContainer}>
            {cardElements}
        </div>
    )
}

/**
 * satu tampilan card
 * @param {{name: string, url: string, image: string, hidden?: boolean}} props 
 */
const TravelCard = (props) => {
    const styleList = [
        styles.travelCard
    ];

    if (props.hidden) {
        styleList.push(styles.travelCardHidden)
    };

    return (
        <article className={styleList.join(' ')}>
            <Link to={props.url}>
                <h3>{props.name}</h3>
                <img src={props.image}/>
            </Link>
        </article>
    )
}
export {
    TravelCardContainer,
    TravelCard
}