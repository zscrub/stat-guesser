<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input, Span } from 'flowbite-svelte'
  </script>
  
  <Navbar class="mb-2" let:hidden>
    <NavBrand href="/qb">
    <Span gradient class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Stat-Guesser
    </Span>
      <img
        src="https://www.svgrepo.com/show/16488/american-football-player.svg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
    </NavBrand>
    <div class="flex md:order-2">
      <NavUl {hidden} class="order-1 align-right">
        <NavLi href="/qb">
            <span class="text-green-400 hover:text-green-500">
                Play
            </span>
        </NavLi>
        <NavLi href="/stats-table">
            <span class="text-gray-400 hover:text-red-500">
                Stats Table (cheating)
            </span>
        </NavLi>
      </NavUl>
    </div>
  </Navbar>