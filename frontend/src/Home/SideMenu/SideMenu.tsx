import React from 'react';

import './SideMenu.css';

function SideMenu() {

  return (
    <nav>

      <ul>
        <li>Alunos</li>
        <li>Funcionários</li>
        <li>
          <SubjectIcon /> Materias</li>
      </ul>
    </nav>
  );
};

export default SideMenu;