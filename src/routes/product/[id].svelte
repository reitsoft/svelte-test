<!-- Serverside rendering -->
<script context="module">
	export async function load({ page }) {
		const id = page.params.id;
		const url = `https://fakestoreapi.com/products/${id}`;
		const res = await fetch(url);
		const product = await res.json();
		return { props: { product } };
	}
</script>

<script>
	export let product;
</script>

<div class="w-full max-w-l overflow-hidden rounded border bg-white shadow">
  <div class="relative">
    <div class="h-72 mt-4 mb-4 bg-contain bg-no-repeat bg-center"
      style="background-image: url({product.image})">
    </div>
    <div style="background-color: rgba(0,0,0,0.6)"
      class="absolute bottom-0 mb-2 ml-3 px-2 py-1 rounded text-sm text-white">{product.price} €</div>
  </div>
  <div class="p-3">
    <h3 class="mr-10 text-xl truncate-2nd">
      <a class="hover:text-blue-500" href="/huawwei-p20-pro-complete-set-with-box-a.7186128376">{product.title}</a>
    </h3>
    <div class="flex items-start justify-between">
      <p class="text-l text-gray-500">{product.description}</p>
      <button class="outline text-xs text-gray-500 hover:text-blue-500" title="Bookmark this ad"><i class="far fa-bookmark"></i></button>
    </div>
    <div class="ml-1 mt-6">
    <a href="/" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Back
    </a>
  </div>
  </div>
</div>
