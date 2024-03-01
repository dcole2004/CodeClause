function resumeBuilder() {
 document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let formData = new FormData(this);
    let resume = '';
  
    resume += "Name: " + formData.get("name") + "<br>";
    resume += "Summary: " + formData.get("summary") + "<br>";
    resume += "High School: " + formData.get("hs") + "<br>";
    resume += "College: " + formData.get("college") + "<br>"
    resume += "Experience #1: " + formData.get("exp1") + "<br>";
    resume += "Experience #2: " + formData.get("exp2") + "<br>";
    resume += "Experience #3: " + formData.get("exp3") + "<br>";
    resume += "Skill #1: " + formData.get("skill1") + "<br>";
    resume += "Skill #2: " + formData.get("skill2") + "<br>";
    resume += "Skill #3: " + formData.get("skill3") + "<br>";
    resume += "Skill #4: " + formData.get("skill4") + "<br>";
    resume += "Skill #5: " + formData.get("skill5") + "<br>";
    resume += "Award/Certificate #1: " + formData.get("awc1") + "<br>";
    resume += "Award/Certificate #1: " + formData.get("awc2") + "<br>";
    resume += "Award/Certificate #1: " + formData.get("awc3") + "<br>";
    resume += "Award/Certificate #1: " + formData.get("awc4") + "<br>";
    resume += "Award/Certificate #1: " + formData.get("awc5") + "<br>";
    resume += "Recommendation #1: " + formData.get("rec1") + "<br>";
    resume += "Recommendation #2: " + formData.get("rec2") + "<br>";
    resume += "Recommendation #3: " + formData.get("rec3") + "<br>";
  
  

    document.getElementById('resume').innerHTML = resume;
  });
}
