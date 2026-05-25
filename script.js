/* ==========================================
   AGRINHO 2026 - SCRIPT PRINCIPAL (script.js)
   Funcionalidades: Cálculo de Receitas e Modo Escuro
   ========================================== */

// Base de dados com informações das pragas e receitas
const pragasDB = {
    pulgao: {
        nome: "Pulgão",
        descricao: "Pequenos insetos que sugam seiva das plantas, enrugando e deformando folhas. Deixam substância pegajosa que atrai fungos.",
        receita: {
            titulo: "Calda de Sabão",
            ingredientes: [
                "10g de sabão de coco neutro (ou detergente neutro)",
                "1 litro de água morna",
                "Pulverizador"
            ],
            modo_preparo: "1. Dissolva o sabão completamente em água morna<br>2. Deixe esfriar um pouco<br>3. Coloque em pulverizador",
            modo_aplicacao: "Borrife toda a planta, em ambos os lados das folhas, ao final da tarde. Repita a cada 7 dias se necessário.",
            dicas: "Melhor eficácia ao entardecer. Use luvas durante a aplicação.",
            frequencia: "A cada 7-10 dias conforme necessário"
        }
    },
    lagarta: {
        nome: "Lagarta",
        descricao: "Larvas de insetos que comem folhas, criando buracos característicos. Podem desfolhar plantas rapidamente.",
        receita: {
            titulo: "Infusão de Pimenta",
            ingredientes: [
                "50g de pimenta vermelha (ou 30g pimenta seca)",
                "1 litro de água",
                "Peneira ou coador",
                "Pulverizador"
            ],
            modo_preparo: "1. Bata a pimenta com água em liquidificador<br>2. Deixe repousar por 24 horas<br>3. Coe bem através de peneira fina<br>4. Dilua em proporção 1:2 (infusão:água)",
            modo_aplicacao: "Borrife nas folhas infestadas, de preferência no início da manhã ou final da tarde. Evite aplicar em horas muito quentes.",
            dicas: "Não inale o vapor durante a preparação. Use máscara se necessário.",
            frequencia: "A cada 10-14 dias conforme necessário"
        }
    },
    acaros: {
        nome: "Ácaros",
        descricao: "Aracnídeos microscópicos que causam amarelecimento e queda de folhas. Deixam teias finas nas plantas.",
        receita: {
            titulo: "Óleo Vegetal com Sabão",
            ingredientes: [
                "2 colheres de óleo vegetal (milho, soja ou coco)",
                "1 litro de água",
                "5ml de sabão líquido neutro",
                "Pulverizador"
            ],
            modo_preparo: "1. Misture o óleo em água morna<br>2. Adicione o sabão líquido<br>3. Agite bem por 2 minutos<br>4. Coloque em pulverizador",
            modo_aplicacao: "Pulverize toda a planta, atingindo principalmente a parte inferior das folhas onde os ácaros se concentram.",
            dicas: "A mistura sufoca os ácaros e seus ovos. Bastante eficaz em clima seco.",
            frequencia: "A cada 7 dias por 3-4 semanas"
        }
    },
    cochonilha: {
        nome: "Cochonilha",
        descricao: "Insetos com carapaça protetora que se fixam em galhos e folhas, sugando seiva e enfraquecendo a planta.",
        receita: {
            titulo: "Calda de Álcool e Sabão",
            ingredientes: [
                "250ml de álcool 70%",
                "1 litro de água",
                "10g de sabão neutro",
                "Pulverizador"
            ],
            modo_preparo: "1. Dissolva o sabão em pequena quantidade de água morna<br>2. Adicione o álcool à mistura<br>3. Coloque em pulverizador com água",
            modo_aplicacao: "Aplique diretamente sobre as cochonilhas com um pincel embebido. Também pode pulverizar toda a planta.",
            dicas: "Tenha paciência - cochonilhas são resistentes. Pode ser necessário fazer raspagem manual antes da aplicação.",
            frequencia: "Diariamente por 10 dias, depois cada 3 dias"
        }
    },
    "mosca-branca": {
        nome: "Mosca-branca",
        descricao: "Pequenos insetos brancos que voam quando a planta é tocada. Causam amarelecimento das folhas.",
        receita: {
            titulo: "Calda de Enxofre e Sabão",
            ingredientes: [
                "5g de enxofre em pó",
                "10g de sabão neutro",
                "1 litro de água",
                "Pulverizador"
            ],
            modo_preparo: "1. Dissolva bem o sabão em água morna<br>2. Adicione o enxofre gradualmente, mexendo constantemente<br>3. Deixe decantar por 12 horas<br>4. Use apenas o sobrenadante no pulverizador",
            modo_aplicacao: "Pulverize pela manhã cedo, cobrindo bem as folhas, especialmente a face inferior.",
            dicas: "Enxofre é muito eficaz. Não use em temperaturas acima de 32°C.",
            frequencia: "A cada 7-10 dias"
        }
    },
    oídio: {
        nome: "Oídio (Fungo)",
        descricao: "Fungo que causa pó branco nas folhas. Reduz a fotossíntese e enfraquece a planta.",
        receita: {
            titulo: "Calda de Leite",
            ingredientes: [
                "100ml de leite integral",
                "900ml de água",
                "Pulverizador"
            ],
            modo_preparo: "1. Misture leite e água bem<br>2. Deixe em repouso por 30 minutos<br>3. Coloque em pulverizador<br>Nota: Prepare sempre fresco, não guarde",
            modo_aplicacao: "Pulverize toda a planta, cobrindo bem as folhas afetadas. Aplicar a cada 5-7 dias.",
            dicas: "O leite funciona como fungicida natural. Aplique em dias nublados ou ao entardecer.",
            frequencia: "A cada 5-7 dias até desaparecer"
        }
    },
    ferrugem: {
        nome: "Ferrugem",
        descricao: "Fungo que causa manchas castanho-avermelhadas principalmente na face inferior das folhas.",
        receita: {
            titulo: "Calda de Fermento e Açúcar",
            ingredientes: [
                "1 colher de fermento biológico",
                "1 colher de açúcar",
                "1 litro de água",
                "Recipiente para fermentação",
                "Pulverizador"
            ],
            modo_preparo: "1. Dissolva o fermento e açúcar em água morna<br>2. Deixe fermentar por 24 horas em local fresco<br>3. Use sem filtrar",
            modo_aplicacao: "Pulverize as folhas afetadas, principalmente a face inferior. Repita a cada 10 dias.",
            dicas: "As bactérias beneficiam o solo e combatem fungos. Eco-friendly e seguro.",
            frequencia: "A cada 10-14 dias"
        }
    },
    antracnose: {
        nome: "Antracnose",
        descricao: "Fungo que causa manchas escuras nas folhas e frutos. Pode apodrecer frutos em desenvolvimento.",
        receita: {
            titulo: "Calda Bordalesa Natural",
            ingredientes: [
                "5g de sulfato de cobre",
                "5g de cal virgem",
                "1 litro de água",
                "Recipiente não-metálico",
                "Pulverizador"
            ],
            modo_preparo: "1. Dissolva o sulfato de cobre em 500ml água<br>2. Dissolva a cal em 500ml água<br>3. Misture os dois cuidadosamente<br>4. Use imediatamente",
            modo_aplicacao: "Pulverize toda a planta, começando pelas folhas inferiores. Use antes do aparecimento dos sintomas como preventivo.",
            dicas: "Muito eficaz em prevenção. Use equipamento de proteção.",
            frequencia: "A cada 14 dias em prevenção; a cada 7 dias se afetada"
        }
    }
};

// Alternar Modo Escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    
    // Salvar preferência no localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Mudar emoji do botão
    const btn = document.querySelector('.toggle-dark');
    btn.textContent = isDarkMode ? '☀️' : '🌙';
}

// Carregar preferência de modo escuro ao iniciar
window.addEventListener('DOMContentLoaded', function() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('.toggle-dark').textContent = '☀️';
    }
});

// Mostrar descrição da praga ao selecionar
function mostrarDescricao() {
    const pragaSelect = document.getElementById('praga');
    const descricaoDiv = document.getElementById('descricao-praga');
    const praga = pragaSelect.value;
    
    if (praga && pragasDB[praga]) {
        descricaoDiv.textContent = pragasDB[praga].descricao;
        descricaoDiv.style.display = 'block';
    } else {
        descricaoDiv.style.display = 'none';
    }
}

// Função principal que calcula e mostra a receita
function calcularSimulador() {
    const pragaSelect = document.getElementById('praga');
    const praga = pragaSelect.value;
    const resultadoDiv = document.getElementById('resultado');
    
    // Validar se alguma praga foi selecionada
    if (!praga || !pragasDB[praga]) {
        resultadoDiv.style.display = 'none';
        alert('Por favor, selecione uma praga ou problema para continuar.');
        return;
    }
    
    const pragaInfo = pragasDB[praga];
    const receita = pragaInfo.receita;
    
    // Construir HTML da resposta
    let html = `
        <h3>✓ ${receita.titulo}</h3>
        <p><strong>Problema identificado:</strong> ${pragaInfo.nome}</p>
        
        <div class="ingredientes">
            <h4>📋 Ingredientes:</h4>
            <ul>
                ${receita.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
        </div>
        
        <div class="ingredientes">
            <h4>🔨 Modo de Preparo:</h4>
            <p>${receita.modo_preparo}</p>
        </div>
        
        <div class="ingredientes">
            <h4>🌱 Modo de Aplicação:</h4>
            <p>${receita.modo_aplicacao}</p>
        </div>
        
        <div class="ingredientes">
            <h4>💡 Dicas Importantes:</h4>
            <p>${receita.dicas}</p>
        </div>
        
        <div class="ingredientes" style="border-left: 4px solid #ff9800; background-color: rgba(255, 152, 0, 0.05);">
            <h4>⏰ Frequência:</h4>
            <p><strong>${receita.frequencia}</strong></p>
        </div>
    `;
    
    resultadoDiv.innerHTML = html;
    resultadoDiv.style.display = 'block';
    
    // Scroll suave até o resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Permitir Enter para buscar
document.addEventListener('DOMContentLoaded', function() {
    const pragaSelect = document.getElementById('praga');
    if (pragaSelect) {
        pragaSelect.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calcularSimulador();
            }
        });
    }
});
