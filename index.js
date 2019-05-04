let bill = document.querySelector(".the-bill");
let msg = document.querySelector(".output");
let service = document.querySelector(".service-value");

function calculateTip()
{

	if( service.value == 1 )
	{
		msg.textContent = "Your tip is: $ 0";
	}
	else if( service.value == 2 )
	{
		let tip = ( bill.value * 0.05 ).toFixed(2);
		msg.textContent = `Your tip is: $ ${tip}`;
	}
	else if( service.value == 3 )
	{
		let tip = ( bill.value * 0.1 ).toFixed(2);
		msg.textContent = `Your tip is: $ ${tip}`;
	}
	else if( service.value == 4 )
	{
		let tip = ( bill.value * 0.2 ).toFixed(2);
		msg.textContent = `Your tip is: $ ${tip}`;
	}
	else if( service.value == 5 )
	{
		let tip = ( bill.value * 0.3 ).toFixed(2);
		msg.textContent = `Your tip is: $ ${tip}`;
	}
	else
	{
		alert( "Are you a hack3r?" );
	}

}
