import React from "react";
import LeakedPasswordsWidget from "../../components/Widgets/LeakedPasswordsWidget/LeakedPasswordsWidget";
import './top-leaked-passwords-section.scss';

const TopLeakedPasswords = ({ passwordsData }) => {
  return (
    <div className="top-leaked-passwords-section">
      <h3>Top leaked passwords</h3>
      <LeakedPasswordsWidget passwordsData={passwordsData} />
    </div>
  );
};

export default TopLeakedPasswords;
