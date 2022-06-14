import React from 'react'

export default function DisplayCards(props) {
    const villagersInfo = props.villagers.map((villager, idx) => {
        return(
            <li style={{listStyle: 'none'}} key={`villager-${idx}`}>
            <img src={villager.image_uri} alt={`portrait of ${villager.name['name-USen']}`} onClick={() => props.handleClick(villager)} />
            <p>{villager.name['name-USen']}</p>
            </li>
        )
    })

  return (
    <>
    <ul>
        {villagersInfo}
    </ul>
    </>
  )
}
