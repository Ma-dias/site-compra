// Configuração do WhatsApp do seu Bar (Coloque o número real com DDD)
const NUMERO_WHATSAPP = "5561999999999";

// Árvore Completa de Produtos organizada conforme suas categorias e subcategorias
const menu = [
    {
        categoria: "1. Bebidas",
        subcategorias: [
            {
                nome: "1.1 Cervejas",
                produtos: [
                    { id: 101, nome: "Cerveja Heineken Long Neck 330ml", preco: 12.00 },
                    { id: 102, nome: "Cerveja Brahma duplo malt Lata 350ml", preco: 8.00 },
                    { id: 103, nome: "Cerveja IPA Artesanal 500ml", preco: 24.00 },
                    { id: 104, nome: "Chope Pilsen 400ml", preco: 10.00 },
                    { id: 105, nome: "Cerveja Budweiser Zero (Sem Álcool)", preco: 9.00 }
                ]
            },
            {
                nome: "1.2 Drinks e Coquetéis",
                produtos: [
                    { id: 106, nome: "Caipirinha de Limão (Cachaça)", preco: 20.00 },
                    { id: 107, nome: "Gin Tônica Tropical", preco: 28.00 },
                    { id: 108, nome: "Shot de Tequila Jose Cuervo", preco: 15.00 },
                    { id: 109, nome: "Mocktail de Frutas Vermelhas (Sem Álcool)", preco: 18.00 }
                ]
            },
            {
                nome: "1.3 Destilados e Licores",
                produtos: [
                    { id: 110, nome: "Dose Cachaça Envelhecida", preco: 12.00 },
                    { id: 111, nome: "Dose Vodka Absolut", preco: 22.00 },
                    { id: 112, nome: "Dose Whisky Red Label", preco: 25.00 },
                    { id: 113, nome: "Dose Licor 43", preco: 26.00 }
                ]
            },
            {
                nome: "1.4 Vinhos e Espumantes",
                produtos: [
                    { id: 114, nome: "Vinho Tinto Cabernet Sauvignon (Garrafa)", preco: 85.00 },
                    { id: 115, nome: "Vinho Branco Chardonnay (Garrafa)", preco: 85.00 },
                    { id: 116, nome: "Espumante Brut 750ml", preco: 95.00 },
                    { id: 117, nome: "Taça de Vinho da Casa", preco: 22.00 }
                ]
            },
            {
                nome: "1.5 Bebidas Não Alcoólicas",
                produtos: [
                    { id: 118, nome: "Coca-Cola Lata 350ml", preco: 8.00 },
                    { id: 119, nome: "Água Mineral sem Gás 500ml", preco: 5.00 },
                    { id: 120, nome: "Água com Gás 500ml", preco: 6.00 },
                    { id: 121, nome: "Água de Coco Natural 300ml", preco: 10.00 },
                    { id: 122, nome: "Suco Natural de Laranja 400ml", preco: 10.00 },
                    { id: 123, nome: "Energético Red Bull 250ml", preco: 16.00 }
                ]
            }
        ]
    },
    {
        categoria: "2. Comidas",
        subcategorias: [
            {
                nome: "2.1 Porções e Petiscos",
                produtos: [
                    { id: 201, nome: "Batata Frita Tradicional (500g)", preco: 35.00 },
                    { id: 202, nome: "Mandioca Frita com Bacon", preco: 38.00 },
                    { id: 203, nome: "Porção de Pastéis Misto (10 un)", preco: 32.00 },
                    { id: 204, nome: "Contra Filé na Chapa com Pão", preco: 68.00 },
                    { id: 205, nome: "Tábua de Frios Completa", preco: 55.00 }
                ]
            },
            {
                nome: "2.2 Pratos e Refeições",
                produtos: [
                    { id: 206, nome: "Prato Executivo Filé de Frango", preco: 32.00 },
                    { id: 207, nome: "Peixe Acarajé/Isca para Compartilhar", preco: 75.00 },
                    { id: 208, nome: "Salada Caesar com Tiras de Frango", preco: 28.00 }
                ]
            }
        ]
    },
    {
        categoria: "3. Lanches",
        subcategorias: [
            {
                nome: "3.1 Sanduíches e Salgados",
                produtos: [
                    { id: 301, nome: "Burguer Artesanal 180g + Fritas", preco: 38.00 },
                    { id: 302, nome: "Misto Quente Especial", preco: 14.00 },
                    { id: 303, nome: "Sanduíche de Filé Mignon", preco: 34.00 },
                    { id: 304, nome: "Coxinha de Frango com Requeijão", preco: 9.00 }
                ]
            }
        ]
    },
    {
        categoria: "4. Bomboniere e Snacks",
        subcategorias: [
            {
                nome: "4.1 Doces e Snacks",
                produtos: [
                    { id: 401, nome: "Chocolate Barra 80g", preco: 10.00 },
                    { id: 402, nome: "Pacote de Chicletes/Pastilhas", preco: 5.00 },
                    { id: 403, nome: "Batata Chips Pringles", preco: 18.00 },
                    { id: 404, nome: "Amendoim Torrado e Salgado", preco: 8.00 },
                    { id: 405, nome: "Picolé / Sorvete Kibon", preco: 12.00 }
                ]
            }
        ]
    },
    {
        categoria: "5. Cigarros e Tabacaria",
        subcategorias: [
            {
                nome: "5.1 Tabacaria Geral",
                produtos: [
                    { id: 501, nome: "Maço de Cigarro Marlboro", preco: 14.00 },
                    { id: 502, nome: "Cigarro de Palha (Maço)", preco: 18.00 },
                    { id: 503, nome: "Pod Descartável 1500 puffs", preco: 65.00 },
                    { id: 504, nome: "Isqueiro Bic", preco: 7.00 },
                    { id: 505, nome: "Seda para Cigarro", preco: 6.00 }
                ]
            }
        ]
    },
    {
        categoria: "6. Conveniência e Diversos",
        subcategorias: [
            {
                nome: "6.1 Utilidades e Conveniência",
                produtos: [
                    { id: 601, nome: "Eno / Antiácido Sachê", preco: 5.00 },
                    { id: 602, nome: "Dorflex (Cartela)", preco: 8.00 },
                    { id: 603, nome: "Preservativo (Pacote c/ 3)", preco: 12.00 },
                    { id: 604, nome: "Cabo de Celular (Type C / iPhone)", preco: 35.00 },
                    { id: 605, nome: "Carregador de Parede Universal", preco: 45.00 }
                ]
            }
        ]
    }
];

let carrinho = {};

// Função para renderizar o cardápio em formato de Acordeão
function carregarCardapio() {
    const container = document.getElementById('cardapio-categorias');
    container.innerHTML = '';

    menu.forEach((catObj, indexCat) => {
        // Div da Categoria Principal
        const catDiv = document.createElement('div');

        let subcatsHTML = '';

        catObj.subcategorias.forEach((subObj, indexSub) => {
            let produtosHTML = '';

            subObj.produtos.forEach(prod => {
                carrinho[prod.id] = { nome: prod.nome, preco: prod.preco, qtd: 0 };

                produtosHTML += `
          <div class="produto-item">
            <div class="produto-info">
              <strong>${prod.nome}</strong>
              <span>R$ ${prod.preco.toFixed(2).replace('.', ',')}</span>
            </div>
            <div class="produto-controles">
              <button class="btn-qtd" onclick="alterarQtd(${prod.id}, -1)">-</button>
              <span class="qtd-valor" id="qtd-${prod.id}">0</span>
              <button class="btn-qtd" onclick="alterarQtd(${prod.id}, 1)">+</button>
            </div>
          </div>
        `;
            });

            subcatsHTML += `
        <div class="subcategoria-titulo" onclick="toggleElemento('subcat-${indexCat}-${indexSub}')">
          <span>${subObj.nome}</span>
          <span>▼</span>
        </div>
        <div id="subcat-${indexCat}-${indexSub}" class="subcategoria-conteudo">
          ${produtosHTML}
        </div>
      `;
        });

        catDiv.innerHTML = `
      <div class="categoria-titulo" onclick="toggleElemento('cat-${indexCat}')">
        <span>${catObj.categoria}</span>
        <span>▼</span>
      </div>
      <div id="cat-${indexCat}" class="categoria-conteudo">
        ${subcatsHTML}
      </div>
    `;

        container.appendChild(catDiv);
    });
}

// Abrir e Fechar Seções
function toggleElemento(id) {
    const el = document.getElementById(id);
    if (el.classList.contains('ativo')) {
        el.classList.remove('ativo');
    } else {
        el.classList.add('ativo');
    }
}

// Alterar quantidade
function alterarQtd(id, delta) {
    if (carrinho[id].qtd + delta >= 0) {
        carrinho[id].qtd += delta;
        document.getElementById(`qtd-${id}`).innerText = carrinho[id].qtd;
        atualizarCarrinho();
    }
}

// Atualizar resumo no final da tela
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('carrinho-itens');
    const valorTotalEl = document.getElementById('valor-total');

    listaCarrinho.innerHTML = '';
    let total = 0;
    let temItens = false;

    Object.keys(carrinho).forEach(id => {
        const item = carrinho[id];
        if (item.qtd > 0) {
            temItens = true;
            const subtotal = item.qtd * item.preco;
            total += subtotal;

            const li = document.createElement('li');
            li.innerHTML = `
        <span>${item.qtd}x ${item.nome}</span>
        <span>R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
      `;
            listaCarrinho.appendChild(li);
        }
    });

    if (!temItens) {
        listaCarrinho.innerHTML = '<li class="vazio">Nenhum item selecionado.</li>';
    }

    valorTotalEl.innerText = total.toFixed(2).replace('.', ',');
}

// Enviar pelo WhatsApp
function enviarPedido() {
    const zona = document.getElementById('zona').value;
    const ponto = document.getElementById('ponto').value;
    const cliente = document.getElementById('cliente').value;

    if (!zona || !ponto) {
        alert("Por favor, selecione a Área do Clube e informe o Ponto de Referência.");
        return;
    }

    if (!cliente) {
        alert("Por favor, informe seu nome.");
        return;
    }

    let itensTexto = "";
    let total = 0;

    Object.keys(carrinho).forEach(id => {
        const item = carrinho[id];
        if (item.qtd > 0) {
            const subtotal = item.qtd * item.preco;
            total += subtotal;
            itensTexto += `• ${item.qtd}x ${item.nome} - R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
        }
    });

    if (total === 0) {
        alert("Selecione ao menos um produto antes de finalizar.");
        return;
    }

    let mensagem = `*BAR DO CLUBE* - Novo Pedido! 🍹\n\n`;
    mensagem += `👤 *Cliente:* ${cliente}\n`;
    mensagem += `📍 *Área:* ${zona}\n`;
    mensagem += `🎯 *Local Exato:* ${ponto}\n\n`;
    mensagem += `📋 *ITENS DO PEDIDO:*\n${itensTexto}\n`;
    mensagem += `💰 *TOTAL:* R$ ${total.toFixed(2).replace('.', ',')}\n\n`;
    mensagem += `_Aguardando confirmação do pedido._`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

window.onload = carregarCardapio;