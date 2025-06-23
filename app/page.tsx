'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-[family-name:var(--font-geist-sans)]">

      {/* Header */}
      <header className="flex items-center justify-between px-8 py-2 bg-white shadow-md fixed w-full z-40">
        <div className="flex items-center gap-2">
          <Image src="/momentum_logo.png" alt="Logo" width={70} height={40} />
          <h1 className="text-base font-semibold text-gray-700">Momentum Soluções</h1>
        </div>
        <div className="flex gap-2">
          <Link href="/login" className="text-sm bg-violet-600 text-white rounded-lg py-2 px-4 border-2 border-gray-400 hover:bg-white hover:text-violet-600 transition-colors">Entrar</Link>
          <Link href="/cadastro" className="text-sm text-violet-600 rounded-lg py-2 px-4 border-2 border-gray-400 hover:bg-violet-600 hover:text-white transition-colors">Cadastrar</Link>
        </div>
      </header>

      {/*Principal Section */}
      
      <main className="relative mt-24 h-[80vh] px-6 sm:px-20 py-10 overflow-hidden flex items-center justify-center">

  {/* Imagem de fundo */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/exemplo.png"
      alt="Fundo decorativo"
      fill
      className="object-cover opacity-30"
      priority
    />
  </div>

  <motion.div
    className="text-center max-w-3xl"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold text-gray-600 mb-6">Conecte. Desenvolva. Integre.</h2>
    <p className="text-lg text-gray-700 mb-10">
      Sua plataforma central para <span className="text-violet-600">integração de dados</span>, <span className="text-violet-600">gestão operacional</span> e <span className="text-violet-600">desenvolvimento sob demanda</span>.<br />
      Ideal para equipes que buscam <span className="text-violet-600">agilidade</span>, <span className="text-violet-600">eficiência</span> e <span className="text-violet-600">controle total</span>.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link href="/login" className="text-xl bg-violet-600 border-2 border-gray-400 text-white rounded-lg py-2 px-4 hover:bg-white hover:text-violet-600 transition-colors">Acessar Plataforma</Link>
      <a href="#beneficios" className="text-xl bg-white border-2 border-gray-400 text-violet-600 rounded-lg py-2 px-4 hover:bg-violet-800 hover:text-white transition-colors">Saiba mais</a>
    </div>
  </motion.div>
</main>


      {/* Benefícios */}
      <section id="beneficios" className="bg-white py-20 px-6 sm:px-20">
        <h3 className="text-2xl font-semibold text-center text-gray-600 mb-12">O que oferecemos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded shadow shadow-xl">
            <h4 className="font-semibold text-violet-600 text-lg mb-2">Integração de Sistemas</h4>
            <p className="text-sm text-gray-600">Conecte ERPs, CRMs, APIs externas e bancos de dados com fluidez e segurança.</p>
          </div>
          <div className="p-6 rounded shadow shadow-xl">
            <h4 className="font-semibold text-violet-600 text-lg mb-2">Ambiente de Desenvolvimento</h4>
            <p className="text-sm text-gray-600">Ferramentas, métricas e recursos para sua equipe técnica inovar e evoluir continuamente.</p>
          </div>
          <div className="p-6 rounded shadow shadow-xl">
            <h4 className="font-semibold text-violet-600 text-lg mb-2">Gestão Unificada</h4>
            <p className="text-sm text-gray-600">Gerencie processos, usuários, integrações e muito mais em um único lugar.</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-gray-50 py-20 px-6 sm:px-20">
        <h3 className="text-2xl font-semibold text-center text-gray-600 mb-12">Nossos Serviços</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="p-6 border rounded shadow hover:shadow-lg transition-shadow">
            <h4 className="text-violet-600 font-semibold text-lg mb-2">Automação de Processos</h4>
            <p className="text-sm text-gray-700">Criamos fluxos automáticos que economizam tempo e reduzem erros operacionais.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition-shadow">
            <h4 className="text-violet-600 font-semibold text-lg mb-2">Integração com iFood</h4>
            <p className="text-sm text-gray-700">Unimos dados da sua operação no iFood com sistemas internos para uma gestão completa.</p>
          </div>
          <div className="p-6 border rounded shadow hover:shadow-lg transition-shadow">
            <h4 className="text-violet-600 font-semibold text-lg mb-2">Dashboards Personalizados</h4>
            <p className="text-sm text-gray-700">Visualize os indicadores mais importantes para o seu negócio com gráficos intuitivos.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-6 sm:px-20 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Link href="#servicos" className="mx-2 hover:underline">Serviços</Link>
            <Link href="#beneficios" className="mx-2 hover:underline">Benefícios</Link>
            <Link href="mailto:contato@momentum.com" className="mx-2 hover:underline">E-mail</Link>
            <Link href="https://wa.me/SEUNUMERO" className="mx-2 hover:underline">WhatsApp</Link>
          </div>
          <div>
            © {new Date().getFullYear()} Momentum Soluções. Todos os direitos reservados.
          </div>
        </div>
      </footer>

    </div>
  )
}
