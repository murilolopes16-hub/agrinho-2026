<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Agrinho 2026 - Simulador de Defensivos Naturais</title>
    <style>
        /* CSS: Estilização do Site (Cores voltadas à sustentabilidade) */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f9f4;
            color: #333;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .container {
            max-width: 600px;
            width: 100%;
            background: #ffffff;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            border-top: 8px solid #2e7d32; /* Verde Agrinho */
        }

        h1 {
            color: #2e7d32;
            text-align: center;
            margin-bottom: 10px;
            font-size: 24px;
        }

        .subtitulo {
            text-align: center;
            color: #666;
            font-size: 14px;
            margin-bottom: 30px;
        }

        .campo-busca {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            color: #1b5e20;
        }

        select {
            width: 100%;
            padding: 12px;
            border: 2px solid #a5d6a7;
            border-radius: 6px;
            background-color: #fff;
            font-size: 16px;
            color: #333;
            outline: none;
            transition: border-color 0.3s;
        }

        select:focus {
            border-color: #2e7d32;
        }

        button {
            width: 100%;
            background-color: #2e7d32;
            color: white;
            padding: 14px;
            border: none;
            border-radius: 6px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s;
        }

        button:hover {
            background-color: #1b5e20;
        }

        /* Área do Resultado */
        #resultado {
            margin-top: 25px;
            padding: 20px;
            border-radius: 6px;
            background-color: #f1f8e9;
            border-left: 5px solid #81c784;
            display: none; /* Escondido até o clique */
        }

        #resultado h3 {
            margin-top: 0;
            color: #2e7d32;
        }

        .ingredientes {
            background: #fff;
            padding: 10px;
            border-radius: 4px;
            border: 1px solid #e0e0e0;
        }

        .fonte {
            font-size: 11px;
            color: #888;
            margin-top: 15px;
            text-align: right;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Simulador de Defensivos Naturais</h1>
        <div class="subtitulo">Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente</div>

        <div class="campo-busca">
            <label for="praga">1. Qual praga ou problema você identificou?</label>
            <select id="praga">
                <option value="">-- Selecione uma opção --</option>
                <option value="pulgao">Pulgões