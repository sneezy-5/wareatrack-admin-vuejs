<script setup lang="ts">





</script>

<template>
  <VBadge
    dot
    location="bottom right"
    offset-x="3"
    offset-y="3"
    color="success"
    bordered
  >
    <VAvatar
      class="cursor-pointer"
      color="primary"
      variant="tonal"

    >
      <VImg  />

      <!-- SECTION Menu -->
      <VMenu
        activator="parent"
        width="230"
        location="bottom end"
        offset="14px"
      >
        <VList  >
          <!-- 👉 User Avatar & Name -->
          <VListItem >
            <template #prepend>
              <VListItemAction start>
                <VBadge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  color="success"
                >
                  <VAvatar
                    color="primary"
                    variant="tonal"

                  >
                    <VImg  />
                  </VAvatar>
                </VBadge>
              </VListItemAction>
            </template>
            <VListItemTitle class="font-weight-semibold"  >
            Admin
            </VListItemTitle>
            <VListItemSubtitle  >Super admin</VListItemSubtitle>
          </VListItem>
          <VDivider class="my-2" />

          <!-- 👉 Profile -->
          <VListItem link  >
            <template #prepend>
              <VIcon
                class="me-2"
                icon="mdi-account-outline"
                size="22"

              />
            </template>

            <VListItemTitle >Profil</VListItemTitle>
          </VListItem>

         <!-- 👉 Settings -->
<VListItem >
  <template #prepend>
    <VIcon
      class="me-2"
      icon="mdi-cog-outline"
      size="22"
    />
  </template>
  <VListItemTitle  >Paramètre</VListItemTitle>
</VListItem>




          <!-- Divider -->
          <VDivider class="my-2" />

          <!-- 👉 Logout -->
          <VListItem  >
            <template #prepend>
              <VIcon
                class="me-2"
                icon="mdi-logout"
                size="22"

              />
            </template>

            <VListItemTitle >Deconexion</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
      <!-- !SECTION -->
    </VAvatar>
  </VBadge>
</template>
