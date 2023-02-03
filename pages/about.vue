<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, reprehenderit? Nesciunt, reiciendis ducimus? Voluptate praesentium impedit iusto doloremque, incidunt rem earum maiores nostrum sint! Culpa suscipit cupiditate vel dolorum illo reprehenderit blanditiis commodi eos corporis recusandae amet atque molestias enim quae placeat, nisi minima esse voluptate cumque deserunt. Alias qui quaerat voluptatem ex ea commodi labore necessitatibus vel reiciendis quas culpa molestiae ullam ratione ab unde facilis sunt dolores a iusto, quod eius debitis fuga! Aut, minima beatae excepturi hic iusto debitis harum aperiam. Officiis deleniti nesciunt quia soluta minima ea expedita dolore quaerat nostrum facilis aliquam placeat quibusdam rerum quas similique repellat error accusamus cupiditate quos eveniet, quam dolor vel? Ipsa voluptatem, optio ratione adipisci ullam quia eum nostrum. Consectetur deserunt eligendi a sequi quaerat. Exercitationem dolore soluta, velit officia ratione, accusamus quos iure mollitia eius nemo dolores doloribus quae! Sint animi tempore nemo impedit aperiam fugit et assumenda, expedita ipsum illum officia vitae rerum quae iusto similique blanditiis vel accusamus ex. Doloribus nam ad magnam expedita consequatur repellat vel repellendus animi eligendi dolorem sint possimus nemo nihil, nostrum at suscipit temporibus tenetur aliquid! Veritatis ipsum impedit itaque error facilis excepturi eligendi eius amet. Aspernatur quae vel vitae, architecto veniam animi excepturi, quam dicta sint autem culpa. Et qui officia hic aliquam deleniti natus, autem animi harum debitis earum magnam beatae delectus sequi molestias repellendus tenetur, illo libero possimus, officiis iure quas necessitatibus laudantium cumque aspernatur. Quia delectus harum ipsam eaque obcaecati corporis? Perspiciatis quibusdam illum sapiente doloribus quidem cumque deserunt eos id impedit eligendi unde fugiat a, ducimus nesciunt placeat sed. Explicabo nihil sint omnis doloremque inventore, reiciendis id quasi ullam voluptates magni temporibus! Delectus minus suscipit praesentium. Veritatis, reiciendis culpa id non necessitatibus hic officia ullam inventore ipsa officiis dolore, asperiores adipisci nobis rem sapiente molestiae! Repudiandae molestiae officia, a, excepturi nesciunt quos quia earum expedita velit quidem provident ad, vel fugit sint recusandae quisquam doloremque aperiam hic asperiores aliquid nihil cupiditate sed repellat magnam? Debitis quia aliquid enim corrupti ratione necessitatibus veniam, distinctio delectus adipisci, quisquam eos suscipit blanditiis id quaerat similique repudiandae a voluptate tenetur iusto qui corporis labore tempora laborum quod? Aspernatur optio minus maiores, quasi, quis dignissimos quaerat unde illum corporis neque voluptate modi fuga et! Veritatis pariatur iusto animi odit eos corporis, totam, consequatur veniam possimus beatae inventore asperiores consectetur explicabo amet? Voluptatem rem officiis id numquam dignissimos eligendi quas esse minus qui voluptate nam eos dicta, repellendus eveniet. Ducimus sed perspiciatis repellat corporis ipsa laborum quae eius vel cumque impedit ut repudiandae neque qui dignissimos, odio minus veniam ex tempore recusandae enim iusto placeat. Adipisci tenetur ullam dolor maiores voluptates, corrupti doloremque saepe aliquam aperiam magnam commodi rerum nobis, exercitationem odio iste nostrum. Unde, corrupti mollitia.</p>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default',
  pageTransition: {
    name: 'slide-left',
    mode: 'out-in'
  },
  middleware(to, from) {
    to.meta.pageTransition.name = +to.params.id > +from.params.id ? 'slide-left' : 'slide-right'
  }
})
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.2s;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translate(50px, 0);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translate(-50px, 0);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translate(50px, 0);
}
</style>