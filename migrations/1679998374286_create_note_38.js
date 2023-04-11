module.exports = {
    "up": "INSERT INTO `notes_bt`.`notes` (`noteName`, `noteText`) VALUES ('мюсли', 'This is the first note.');",
    "down": "DELETE FROM `notes_bt`.`notes` WHERE (`noteName` = `Note 1`);"
  };