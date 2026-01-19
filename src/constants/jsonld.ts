import { contactHrefs, contactInfo } from "./contact-info";
import categories from '@category-data/categories.json';
import subcategories from '@category-data/subcategories.json';
import services from '@category-data/services.json';
import { idToCategoryRouteMap, idToServiceRouteMap, idToSubcategoryRouteMap } from "./route-id-maps";
import { faqList } from "@src/app/faq/constants/faq-list";

const getServiceId = (category: { id: string }, subcategory: { id: string }, service: { id: string }) => {
  return `${contactHrefs.website}`
    + `/${idToCategoryRouteMap.get(category.id)}`
    + `/${idToSubcategoryRouteMap.get(subcategory.id)}`
    + `/${idToServiceRouteMap.get(service.id)}`;
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "RepairService"],
      "@id": `${contactHrefs.website}/main`,
      "name": "Ремонт холодильников",
      "url": contactHrefs.website,
      "description": "Наша компания специализируется на профессиональном ремонте холодильников любых брендов и моделей, от бытовых до промышленных. Мы работаем на рынке более 10 лет и за это время заслужили репутацию надежных и ответственных специалистов. Наша команда состоит из опытных мастеров с техническим образованием, которые постоянно проходят обучение и знают всё о современных холодильных системах. Мы ценим ваше время, поэтому выезжаем точно по договоренности, диагностируем быстро и устраняем неполадки уже в день обращения. Мы используем только оригинальные запчасти, предоставляем гарантию на все виды работ и всегда объясняем клиенту суть проблемы простыми словами. Наша цель — не просто отремонтировать технику, а сделать так, чтобы вы больше не волновались о её работе.",
      "telephone": contactInfo.phoneNumber,
      "email": contactInfo.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Домбровская 9",
        "addressLocality": "Минск",
        "addressCountry": "BY",
      },
      "openingHours": [
        "Mo-Su 09:00-21:00"
      ],
      "areaServed": [
        { "@type": "City", "name": "Минск" },
        { "@type": "City", "name": "Смолевичи" },
        { "@type": "City", "name": "Копище" },
        { "@type": "City", "name": "Богатырево" },
        { "@type": "City", "name": "Гатово" },
        { "@type": "City", "name": "Колодищи" },
        { "@type": "City", "name": "Фаниполь" },
        { "@type": "City", "name": "Боровляны" },
        { "@type": "City", "name": "Ратомка" },
        { "@type": "City", "name": "Ждановичи" },
        { "@type": "City", "name": "Мачулищи" },
        { "@type": "City", "name": "Заславль" },
      ],
      "paymentAccepted": [
        "Наличные",
        "Банковские карты",
        "Мобильные сервисы",
        "Безналичная оплата для юрлиц",
        "Платеж через ЕРИП"
      ],
      "knowsAbout": [
        "Проблемы с охлаждением у холодильников",
        "Проблемы с работой холодильников",
        "Шумы и посторонние звуки в холодильниках",
        "Проблемы с утечками и протеканием в холодильниках",
        "Проблемы с комплектующими холодильников",
        "Холодильники Атлант",
        "Холодильники LG",
        "Холодильники Samsung",
        "Холодильники Indesit",
        "Холодильники Beko",
        "Холодильники Bosch",
      ],
      "makesOffer": {
        "@id": `${contactHrefs.website}/services`
      },
      "hasOfferCatalog": {
        "@id": `${contactHrefs.website}/services`
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": `${contactHrefs.website}/services`,
      "name": "Услуги по ремонту и обслуживанию холодильников и холодильных установок",
      "itemListElement": categories.map(category => ({
        "@type": "OfferCatalog",
        "name": category.label,
        "itemListElement": subcategories
          .filter(subcategory => subcategory.parentCategoryId === category.id)
          .map(subcategory => ({
            "@type": "OfferCatalog",
            "name": subcategory.label,
            "itemListElement": services
              .filter(service => service.parentCategoryId === subcategory.id)
              .map(service => ({
                "@type": "Service",
                "@id": getServiceId(category, subcategory, service),
                "name": service.label,
                "serviceType": service.label,
                "provider": {
                  "@id": `${contactHrefs.website}/main`
                },
                // no price because it is hidden in an accordion
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "BYN",
                },
                // doesn't account for cases when related services are in different categories or subcategories
                "isRelatedTo": services
                  .filter(relatedService => (service.relatedServiceIds as Array<string>).includes(relatedService.id))
                  .map(relatedService => ({ "@id": getServiceId(category, subcategory, relatedService) }))
              }))
          }))
      })),
    },
    {
      "@type": "HowTo",
      "@id": `${contactHrefs.website}/repair-process`,
      "name": "Как заказать ремонт холодильника",
      "step": [
        {
          "@type": "HowToStep",
          "name": "1 шаг",
          "text": "Оформите заявку онлайн или позвоните менеджеру, узнайте предварительную стоимость ремонта"
        },
        {
          "@type": "HowToStep",
          "name": "2 шаг",
          "text": "Мастер проводит диагностику и называет точную цену ремонта"
        },
        {
          "@type": "HowToStep",
          "name": "3 шаг",
          "text": "Проводим ремонт холодильника и оформляем гарантию"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": `${contactHrefs.website}/faq`,
      "mainEntity": faqList.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer,
        }
      }))
    },
  ]
}