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

}
