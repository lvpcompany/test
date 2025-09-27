import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, X, Check, Star, Shield, Clock, Zap } from 'lucide-react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  const bonuses = [
    {
      title: "Guia das Respostas Irresistíveis",
      originalPrice: "R$19,90",
      description: "Nunca mais vai travar quando ela responder algo inesperado. Aqui você vai saber exatamente o que dizer se ela ignorar, responder curto ou mostrar interesse. É como ter um \"mapa da mina\" pra qualquer situação no Direct."
    },
    {
      title: "Checklist do Perfil Magnético", 
      originalPrice: "R$14,60",
      description: "Não adianta mandar frase boa se o seu perfil não chama atenção. Esse checklist mostra os ajustes certeiros na bio, fotos e destaques pra deixar seu Insta mais atraente e aumentar a chance dela te responder de primeira."
    },
    {
      title: "Frases de Continuação (Bônus Secreto)",
      originalPrice: "R$19,90", 
      description: "Não é só puxar assunto, é manter a chama acesa. Esse pacotinho extra traz frases prontas de continuação que vão deixar o papo fluir de forma natural, sem nunca perder o ritmo."
    },
    {
      title: "Coleção de Respostas Anti-vácuo",
      originalPrice: "R$18,50",
      description: "Chega de levar aquele \"oi\", \"kk\" ou \"hm\" que mata a conversa. Com essas respostas criativas e engraçadas, você consegue virar o jogo e transformar até o papo mais gelado em algo envolvente."
    }
  ]

  const beforeAfter = {
    before: [
      "Fica horas pensando no que escrever",
      "Manda \"oi\" e é ignorado", 
      "Medo de parecer chato ou desesperado",
      "Perde oportunidades por falta de coragem"
    ],
    after: [
      "Frases prontas que geram interesse",
      "Conversas que fluem naturalmente",
      "Confiança total para puxar qualquer assunto", 
      "Mais matches e encontros reais"
    ]
  }

  const benefits = [
    {
      title: "Iniciar conversas que prendem a atenção",
      description: "Frases criativas que fazem ela querer responder"
    },
    {
      title: "Nunca mais ficar sem assunto", 
      description: "Arsenal completo para qualquer situação"
    },
    {
      title: "Parecer interessante e divertido",
      description: "Saia do básico e se destaque de outros caras"
    },
    {
      title: "Transformar matches em encontros",
      description: "Técnicas para levar a conversa do app para a vida real"
    },
    {
      title: "Conquistar mulheres mais exigentes",
      description: "Frases que funcionam até com as mais difíceis"
    },
    {
      title: "Ganhar confiança total",
      description: "Autoestima elevada em qualquer abordagem"
    }
  ]

  const targetAudience = [
    {
      title: "Caras tímidos",
      description: "Que travam na hora de mandar a primeira mensagem"
    },
    {
      title: "Homens que são ignorados",
      description: "Cansados de mandar mensagens e não ter resposta"
    },
    {
      title: "Quem quer resultados rápidos", 
      description: "Precisa de frases testadas e aprovadas, sem enrolação"
    }
  ]

  const whyItWorks = [
    {
      title: "Nada de papo furado",
      description: "Frases diretas que despertam curiosidade"
    },
    {
      title: "Funcionam em qualquer perfil",
      description: "Instagram, Tinder, Bumble e outros apps"
    },
    {
      title: "Organizadas por situações",
      description: "Primeiras mensagens, fotos, stories e muito mais"
    },
    {
      title: "Testadas na prática",
      description: "Cada frase foi validada por homens reais"
    }
  ]

  const comparisonData = [
    {
      option: "500 Frases (Nosso E-book)",
      price: "R$ 19,90",
      results: "Imediatos",
      practicality: "★★★★★",
      recommended: true
    },
    {
      option: "Coach de Relacionamento", 
      price: "R$ 200-500/sessão",
      results: "1+ mês",
      practicality: "★★★"
    },
    {
      option: "Curso de Conquista",
      price: "R$ 300-800", 
      results: "3+ meses",
      practicality: "★★"
    },
    {
      option: "Tentativa e Erro",
      price: "Tempo perdido",
      results: "Anos", 
      practicality: "★"
    }
  ]

  const faqs = [
    "As frases funcionam mesmo?",
    "Como recebo o material após a compra?",
    "Funciona para qualquer idade?",
    "Posso usar em outros apps além do Instagram?",
    "E se não der resultado pra mim?",
    "É só copiar e colar?",
    "Quantas frases vêm no material?"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
      {/* Header */}
      <header className="bg-red-600 text-white py-4 px-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="bg-white text-red-600 p-2 rounded-full">
              <Star className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold">500 Frases Infalíveis</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Puxe Assunto com Qualquer Mulher no Instagram usando essas{' '}
            <span className="text-red-600">500 Frases infalíveis</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Domine a arte da conversa online com frases testadas, aprovadas e prontas para usar - 
            mesmo que você seja tímido ou nunca tenha tido sucesso nas DMs.
          </p>
          
          {/* Product Image Placeholder */}
          <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-2xl p-8 mb-12 max-w-md mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-6xl font-bold text-red-600 mb-2">500</div>
              <div className="text-xl font-semibold text-gray-800">FRASES</div>
              <div className="text-lg font-semibold text-gray-800">INFALÍVEIS</div>
              <div className="text-sm text-gray-600 mt-2">PARA PUXAR ASSUNTO NO</div>
              <div className="text-lg font-bold text-pink-600">INSTAGRAM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-500 text-black text-lg px-4 py-2 mb-4">
              BÔNUS EXCLUSIVOS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Você também vai receber 4 Bônus Incríveis
            </h2>
            <p className="text-xl text-gray-600">
              Materiais extras que vão turbinar ainda mais seus resultados:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="border-2 border-red-200 hover:border-red-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-red-600 border-red-600">
                      BÔNUS {index + 1}
                    </Badge>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 line-through">{bonus.originalPrice}</div>
                      <div className="text-lg font-bold text-green-600">por R$0,00</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{bonus.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {bonus.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gray-50 rounded-2xl p-8">
            <div className="text-lg text-gray-600 mb-2">Valor total dos bônus:</div>
            <div className="text-3xl font-bold text-gray-900 line-through mb-4">R$ 72,90</div>
            <div className="text-2xl text-gray-600 mb-2">Adquira tudo agora por apenas</div>
            <div className="text-5xl font-bold text-red-600 mb-6">R$ 19,90</div>
            
            <Button className="bg-red-600 hover:bg-red-700 text-white text-xl px-12 py-4 rounded-full mb-6">
              QUERO MINHAS 500 FRASES + BÔNUS
            </Button>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Acesso imediato por email</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-600" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>Economia de mais de R$ 53,00!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Sua Transformação no Instagram
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Veja como você vai evoluir com as 500 frases:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-red-200">
              <CardHeader className="bg-red-100">
                <CardTitle className="text-2xl text-red-700 flex items-center">
                  <X className="w-6 h-6 mr-2" />
                  ANTES
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {beforeAfter.before.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="bg-green-100">
                <CardTitle className="text-2xl text-green-700 flex items-center">
                  <Check className="w-6 h-6 mr-2" />
                  DEPOIS
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {beforeAfter.after.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            O Que Você Vai Conquistar
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Resultados práticos que vão mudar seu jogo:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-red-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Para quem é:
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {targetAudience.map((target, index) => (
              <Card key={index} className="text-center border-2 border-red-200">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">{target.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {target.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Por que essas frases são infalíveis?
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Porque foram testadas por milhares de homens e realmente funcionam:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyItWorks.map((reason, index) => (
              <Card key={index} className="text-center border-2 border-green-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-gray-900">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {reason.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Compare o Investimento
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Veja como você economiza escolhendo nosso método:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Opção</th>
                  <th className="px-6 py-4 text-left">Preço</th>
                  <th className="px-6 py-4 text-left">Resultados</th>
                  <th className="px-6 py-4 text-left">Praticidade</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className={`border-b ${item.recommended ? 'bg-green-50 border-green-200' : ''}`}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {item.recommended && (
                          <Badge className="bg-green-600 text-white mr-2">RECOMENDADO</Badge>
                        )}
                        <span className={item.recommended ? 'font-semibold' : ''}>{item.option}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold">{item.price}</td>
                    <td className="px-6 py-4">{item.results}</td>
                    <td className="px-6 py-4">{item.practicality}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-green-600 font-semibold">
              💰 Economia de mais de R$ 500 comparado a outros métodos!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            Tire suas dúvidas antes de adquirir:
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-gray-200 hover:border-red-300 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-gray-900">{faq}</span>
                    <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">
                      +
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-6 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Garantia Total
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ Entrega imediata</h3>
              <p className="text-gray-600">Receba no seu e-mail em segundos</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ Pagamento 100% seguro</h3>
              <p className="text-gray-600">Seus dados totalmente protegidos</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">✅ Garantia de 30 dias</h3>
              <p className="text-gray-600">Não funcionou? Devolvemos seu dinheiro</p>
            </div>
          </div>

          <Card className="border-2 border-green-300 bg-white">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700">Garantia Incondicional</CardTitle>
              <CardDescription className="text-lg">30 dias de satisfação garantida</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se por qualquer motivo você não conseguir melhores resultados no Instagram, 
                ou se as frases não funcionarem para você, devolvemos 100% do seu dinheiro.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Sem perguntas, sem justificativas, sem complicação.
              </p>
              <p className="text-xl font-semibold text-green-600">
                Risco ZERO para você!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-yellow-500 text-black text-lg px-4 py-2 mb-4">
            Oferta por tempo limitado
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Aproveite por apenas R$ 19,90
          </h2>
          <Button className="bg-white text-red-600 hover:bg-gray-100 text-xl px-12 py-4 rounded-full">
            QUERO MINHAS 500 FRASES AGORA
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 500 Frases Infalíveis. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
