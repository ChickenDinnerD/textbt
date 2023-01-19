module.exports = {
    "up": "CREATE TABLE notes (id INT NOT NULL AUTO_INCREMENT, noteName VARCHAR(255) NOT NULL, noteText TEXT NOT NULL, PRIMARY KEY (`id`), UNIQUE INDEX `noteName_UNIQUE` (`noteName`));",
    "down": "DROP TABLE `notes_bt`.`notes`;"
}