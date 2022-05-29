const d = new Date();
const day = ('00' + d.getDate()).slice(-2);
const month = ('00' + d.getMonth()).slice(-2);
const year = d.getFullYear();


var date = month + '/' + day + '/' + year;
var militaryDate = year + '' + month + '' + day;

console.log(militaryDate);


if (militaryDate >= '20230217') {
	console.log('True');
} else {
	console.log('False');
}

var locationElement = document.getElementById("locationElement");
var completingElement = document.getElementById("completingElement");
var dateElement = document.getElementById("dateElement");
var nextElement = document.getElementById("nextElement");

dateElement.textContent = date;

if (militaryDate >= '20220308' && militaryDate < '20220621') {
	// Before shipping out to reception
	completingElement.textContent = "Delayed Entry Program";
	locationElement.textContent = "Home";
	nextElement.textContent = "Reception/Basic Training";
	embedCodeURL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26372883.234977733!2d-113.74691297143889!3d36.20678182028699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sus!4v1653783744435!5m2!1sen!2susel";
	embedCode = '<iframe src="' + embedCodeURL + '" width="100%" height="' + (.75 * window.innerHeight) + '" loading="lazy" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"></iframe>';
} else if (militaryDate >= '20220621' && militaryDate < '20220627') {
	// After shipping out to reception and waiting for basic training
	completingElement.textContent = "Reception";
	locationElement.textContent = "Indianapolis MEPS/Plane/Fort Jackson, SC";
	nextElement.textContent = "Basic Training";
	embedCodeURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3062.9318986499447!2d-86.01840694889597!3d39.85335917933373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b4c7379bc9ec9%3A0x7413990cfee1f03c!2sIndianapolis%20MEPS!5e0!3m2!1sen!2sus!4v1653783161136!5m2!1sen!2sus"width="' + window.outerWidth + '" height = "' + window.outerHeight + '" style = "border: 0; " loading = "lazy" referrerpolicy = "no - referrer - when - downgrade" ></iframe > ';
	embedCode = '<iframe src="' + embedCodeURL + '" width="100%" height="' + (.75 * window.innerHeight) + '" loading="lazy" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"></iframe>';
} else if (militaryDate >= '20220627' && militaryDate < '20220906') {
	// At basic training
	completingElement.textContent = "Basic Training";
	locationElement.textContent = "Fort Jackson, SC";
	nextElement.textContent = "Advanced Individal Training";
	embedCodeURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105849.37492624055!2d-81.09081628359372!3d33.9978512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a35668bbbc5b%3A0xf35a1265332e988e!2sFort%20Jackson!5e0!3m2!1sen!2sus!4v1653783354993!5m2!1sen!2sus'
	embedCode = '<iframe src="' + embedCodeURL + '" width="100%" height="' + (.75 * window.innerHeight) + '" loading="lazy" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"></iframe>';
} else if (militaryDate >= '20220906' && militaryDate <= '20230131') {
	// After basic training
	completingElement.textContent = "Advanced Individual Training";
	locationElement.textContent = "Fort Gordon, GA";
	nextElement.textContent = "Airborne School";
	embedCodeURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53282.41035737506!2d-82.14833321160832!3d33.41931660073502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f9d6fb689b1bab%3A0xcc97255528f4175b!2sFort%20Gordon%2C%20Augusta%2C%20GA%2030905!5e0!3m2!1sen!2sus!4v1653784253399!5m2!1sen!2sus';
	embedCode = '<iframe src="' + embedCodeURL + '" width="100%" height="' + (.75 * window.innerHeight) + '" loading="lazy" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"></iframe>';
} else if (militaryDate >= '20230130' && militaryDate < '20230217') {
	// After AIT
	completingElement.textContent = "Airborne School";
	locationElement.textContent = "Fort Benning, GA";
	nextElement.textContent = "First Duty Station";
	embedCodeURL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d215611.65197861285!2d-84.97059490191943!3d32.394182815403425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f32e5b142e7fc5%3A0x857eb2e636097817!2sFort%20Benning!5e0!3m2!1sen!2sus!4v1653784315121!5m2!1sen!2sus';
	embedCode = '<iframe src="' + embedCodeURL + '" width="100%" height="' + (.75 * window.innerHeight) + '" loading="lazy" frameborder="0" style="border:0" referrerpolicy="no-referrer-when-downgrade"></iframe>';
} else if (militaryDate >= '20230130') {
	completingElement.textContent = "Airborne School";
	locationElement.textContent = "Fort Benning, GA";
	nextElement.textContent = "First Duty Station";
	mapElement = document.getElementById("mapElement");
	mapElement.classList.add("center-h");
	mapElement.innerHTML = 'I have completed all 32 weeks, 3 days of training. <br> Please visit my <a href="https://militaryjobtool.info/bases/">Military Job Tool</a> for a list of bases I could be at.';
}


mapElement = document.getElementById("mapElement");
mapElement.innerHTML = embedCode;