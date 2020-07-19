import React from 'react';

function Subject() {

    return(
      <form className="form-container">
        <label htmlFor="inputSubjectName">Name</label>
        <input type="text" id="inputSubjectName" name="inputSubjectName"/>
      </form>
    );
};

export default Subject;