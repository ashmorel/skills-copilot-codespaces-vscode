function skillsMember() {
  const member = {
    name: 'John Doe',
    age: 30,
    skills: ['HTML', 'CSS', 'JS'],
    // Method
    getSkills: function() {
      return this.skills;
    }
  };

  console.log(member.getSkills());
}