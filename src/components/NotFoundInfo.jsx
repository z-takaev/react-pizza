import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found__title">Страница не найдена!</h1>
      <p className="not-found__description">
        Страница устарела, была удалена или не существовала вовсе
      </p>

      <Link className="not-found__link" to="/">
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;
