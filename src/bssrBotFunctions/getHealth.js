export function getHealth() {

	const healthString = '!! UNSW Services are free to UNSW students !!\n\n\n';

	return  healthString + getLifeline() + getCounsellor() + 
					getHealthServices() + getDentist() + getOptometrist() + 
					getSecurity() + getDutyTutor();
}

function getDutyTutor() {

  const dutyTutorString = "Duty Tutor Phone Number: 02 9385 9786\n";
    
  return dutyTutorString;
    
}

function getSecurity() {
    
	const securityString = "UNSW Security Phone Number: 9385 6000\n\n";

	return securityString;
}

function getLifeline() {

	const lifelineString = "Lifeline Australia Phone Number: 13 11 14\n\n";

	return lifelineString;
}

function getHealthServices() {
	
	const healthServicesString = 'UNSW Health Services Phone Number:  02 9385 5425\n\n';

	return healthServicesString;
}

function getCounsellor() {

	let counsellorString = 'To Book an Appointment with a UNSW Counsellor: https://unsw.au1.qualtrics.com/jfe/form/SV_7P5OepTL4eJDztb\n';
	counsellorString += 'UNSW Mental Health Support Line: 02 9385 5418\n\n';

	return counsellorString;
}

function getDentist() {

	const dentistString = 'UNSW Dentist Phone Number: 02 9313 6228\n\n';

	return dentistString;
}

function getOptometrist() {

	const optometristString = 'To Book an Appointment with the UNSW Optometrist: https://www.unsw.edu.au/medicine-health/our-schools/optometry/optometry-clinic/find-us/appointment\n\n';

	return optometristString;
}

export function getLifelineButton() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Need to call Lifeline?",
			"buttons":[
				{
					"type":"phone_number",
					"title":"Call Lifeline",
					"payload":"131114"
				}
			]
		}
	};
}

export function getCounsellorButton() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Need to book an appointment with a UNSW counsellor?",
			"buttons":[
				{
					"type":"web_url",
					"url":'https://unsw.au1.qualtrics.com/jfe/form/SV_7P5OepTL4eJDztb',
					"title":"Click here",
					"webview_height_ratio": "full"
				}
			]
		}
	};

}

export function getMentalHealthSupportButton() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Need to call the UNSW Mental Health Support Line?",
			"buttons":[
				{
					"type":"phone_number",
					"title":"Call UNSW Mental Health Support",
					"payload":"0293855418"
				}
			]
		}
	};
}

export function getUNSWHealthServicesButton() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
 			"text":"Need a doctor?",
			"buttons":[
				{
					"type":"phone_number",
					"title":"Call UNSW Health Services",
					"payload":"0293855425"
				}
			]
		}
	};
}

export function getDentistButton() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Have a cavity or possibly need a teeth whitening?",
			"buttons":[
				{
					"type":"phone_number",
					"title":"Call UNSW Dentist",
					"payload":"0293136228"
				}
			]
		}
	};
}

export function getOptometristButton() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Need an eye check up and don't want to see Basser's very own Jessie?",
			"buttons":[
				{
					"type":"web_url",
					"url":'https://www.unsw.edu.au/medicine-health/our-schools/optometry/optometry-clinic/find-us/appointment',
					"title":"Click here",
					"webview_height_ratio": "full"
				}
			]
		}
	};
}

export function getSecurityButton() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Need to call UNSW security?",
			"buttons":[
				{
					"type":"phone_number",
					"title":"Call UNSW Security",
					"payload":"93856000"
				}
			]
		}
	};
}
export function getDutyTutorButton() {
	return {
		"type":"template",
		"payload":{
			"template_type":"button",
			"text":"Got locked out of your room or someone is making a racket?",
			"buttons":[
				{
					"type":"phone_number",
					"title":"Call Duty Tutor",
					"payload":"0293859786"
				}
			]
		}
	};
}

