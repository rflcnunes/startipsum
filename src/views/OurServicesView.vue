<template>
  <div>
    <div>title</div>
    <div class="flex flex-col justify-between">
      <div class="flex flex-row items-center justify-center gap-5">
        <div v-for="(card, index) in cards" :key="index">
          <AmCard
            :plan="card.plan"
            :valueForMonth="card.valueForMonth"
            :description="card.description"
            :features="card.features"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AmCard from '../components/atoms/AmCard/AmCard.vue'

export default {
  name: 'OurServicesView',
  components: { AmCard },
  data() {
    return {
      cards: [
        {
          title: 'FrontEnd Development',
          plan: 'Basic',
          valueForMonth: 100,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
          features: [
            'Lorem ipsum dolor sit amet elit.',
            'Lorem ipsum dolor sit amet elit.',
            'Lorem ipsum dolor sit amet elit.'
          ]
        },
        {
          title: 'BackEnd Development',
          plan: 'Plus',
          valueForMonth: 250,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
          features: [
            'Lorem ipsum dolor sit amet elit.',
            'Lorem ipsum dolor sit amet elit.',
            'Lorem ipsum dolor sit amet elit.'
          ]
        },
        {
          title: 'FullStack Development',
          plan: 'Pro',
          valueForMonth: 400,
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
          features: [
            'Lorem ipsum dolor sit amet elit.',
            'Lorem ipsum dolor sit amet elit.',
            'Lorem ipsum dolor sit amet elit.'
          ]
        }
      ]
    }
  }
}
</script>
