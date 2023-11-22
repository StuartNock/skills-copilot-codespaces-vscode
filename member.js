function skillsMember() {
    var mySkills = ["HTML", "CSS", "JS", "PHP", "WordPress", "Joomla"];
    var mySkillsLength = mySkills.length;
    var mySkillsList = "<ul>";
    for (var i = 0; i < mySkillsLength; i++) {
        mySkillsList += "<li>" + mySkills[i] + "</li>";
    }
    mySkillsList += "</ul>";
    return mySkillsList;
}