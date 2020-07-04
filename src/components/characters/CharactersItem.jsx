import React from "react";

const CharactersItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt={item.name} />
        </div>
        <div className='card-back'>
          <h2>{item.name}</h2>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Actor Nickname:</strong> {item.nickname}
            </li>
            <li>
              <ul>
                <strong>Occupation: </strong>
                {item.occupation.map((o, i) => (
                  <li className='occupation-list' key={i}>
                    {o}
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <strong>Actor Status:</strong> {item.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharactersItem;
