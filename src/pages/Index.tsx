import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const advantages = [
    { icon: 'Clock', title: 'Выезд в день обращения', description: 'Оперативно приедем на объект' },
    { icon: 'Clock3', title: 'Работаем 24/7', description: 'Подстраиваемся под ваш график' },
    { icon: 'FileText', title: 'Фиксированные цены', description: 'Прописаны в договоре' },
    { icon: 'Shield', title: 'Соблюдение СНиП и ГОСТ', description: 'Качество по стандартам' },
    { icon: 'BadgeCheck', title: 'Гарантия на работы', description: 'Уверенность в результате' },
    { icon: 'CreditCard', title: 'Любая форма оплаты', description: 'Нал/безнал, рассрочка' }
  ];

  const services = [
    { name: 'Косметический ремонт квартиры', price: 'от 1 000 ₽', note: 'Рыночная цена' },
    { name: 'Капитальный ремонт квартиры', price: 'от 3 500 ₽', note: 'за м²' },
    { name: 'Ремонт ванной комнаты', price: 'от 3 000 ₽', note: 'за м²' },
    { name: 'Ремонт кухни', price: 'от 1 500 ₽', note: 'за м²' },
    { name: 'Демонтаж отделки', price: 'Цена договорная', note: 'за м²' },
    { name: 'Ремонт гостиниц', price: 'от 1 000 ₽', note: 'за м²' },
    { name: 'Ремонт жилых комнат', price: 'от 1 000 ₽', note: 'за м²' }
  ];

  const portfolio = [
    { image: 'https://cdn.poehali.dev/files/90f7fa91-f883-42de-936d-4c2a817f4efc.jpg', title: 'Премиум отделка ресторана' },
    { image: 'https://cdn.poehali.dev/files/18c70a78-b7be-4bb4-a61f-6ee1a7ddce47.jpg', title: 'Дизайнерский ремонт холла' },
    { image: 'https://cdn.poehali.dev/files/02f911cc-5a73-4d51-b66f-e3a875aeea9a.jpg', title: 'Роскошная отделка санузла' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/9f13e959-9d70-433d-a667-16c4cb566373.png" 
              alt="ИОС" 
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги и цены</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-primary to-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Качественный ремонт и отделка <span className="text-gold">«под ключ»</span> в Иркутске
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Соблюдаем сроки. Работаем по договору. Любая форма оплаты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gold text-black hover:bg-gold/90 text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">О компании</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              «Иркутское Объединение Строителей» — это команда профессионалов с солидным опытом в сфере ремонта и отделки. 
              Мы объединяем более 30 проверенных партнёров, чтобы предложить вам полный спектр услуг: от электрики и сантехники 
              до вентиляции и пожарной безопасности.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Наш принцип — прозрачность, ответственность и соблюдение оговоренных сроков. 
              Мы готовы взяться за проекты любой сложности и воплотить ваши идеи в жизнь.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-primary via-black to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Прайс-лист на ремонтные работы</h2>
            <p className="text-center text-gray-300 mb-12">Актуальные цены. Бесплатный расчёт сметы после выезда специалиста.</p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gold text-black">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Услуга</th>
                      <th className="px-6 py-4 text-left font-bold">Цена</th>
                      <th className="px-6 py-4 text-left font-bold">Примечание</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {services.map((service, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4">{service.name}</td>
                        <td className="px-6 py-4 font-bold text-gold">{service.price}</td>
                        <td className="px-6 py-4 text-gray-300">{service.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gold/20 border border-gold rounded-lg">
              <p className="text-center">
                <Icon name="AlertCircle" size={20} className="inline mr-2" />
                <strong>Внимание!</strong> Точная стоимость зависит от объёма работ, материалов и индивидуальных пожеланий.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Портфолио работ</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-bold text-xl p-6">{project.title}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <Card className="p-8 h-full border-2">
                  <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-bold">Телефон</p>
                        <a href="tel:+79021769917" className="text-primary hover:underline">+7 (902) 176-99-17</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-bold">Email</p>
                        <a href="mailto:stepanov.86@inbox.ru" className="text-primary hover:underline">stepanov.86@inbox.ru</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-bold">Адрес</p>
                        <p className="text-gray-700">г. Иркутск, ул. Строителей, 1</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Clock" size={24} className="text-primary mt-1" />
                      <div>
                        <p className="font-bold">Режим работы</p>
                        <p className="text-gray-700">24/7 — работаем круглосуточно</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              
              <div>
                <Card className="p-8 h-full border-2">
                  <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Сообщение"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gold text-black hover:bg-gold/90 text-lg py-6">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/9f13e959-9d70-433d-a667-16c4cb566373.png" 
                alt="ИОС" 
                className="h-16 brightness-0 invert"
              />
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Иркутское Объединение Строителей</p>
              <p className="text-gray-400 text-sm mt-2">Качественный ремонт с гарантией</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;