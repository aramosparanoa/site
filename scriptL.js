const senha = document.querySelector('.senha');
	const btn = document.querySelector('.btn');

	btn.onclick = () =>
	{
		if (senha.type === 'password') 
		{
			senha.type = 'text'
			btn.src = 'img/ocultar.png'
		}
		else
		{
			senha.type = 'password'
			btn.src = 'img/mostrar.png'
		}
	}