<script>
import { sliderTabs, tags } from '../../utilities/sliderTabs'

export default {
	data() {
		return {
			tags,
			activeIndex: 1,
		}
	},
	mounted() {
		sliderTabs()
	},
}
</script>

<template>
	<div class="wrapper">
		<div class="arrow"><i id="left" class="ri-arrow-left-s-line"></i></div>
		<ul class="tagsBox">
			<li
				v-for="(tag, index) in tags"
				:key="index"
				:class="{ active: activeIndex === index }"
				class="tag"
				@click="setActive(index)"
			>
				{{ tag }}
			</li>
		</ul>
		<div class="arrow"><i id="right" class="ri-arrow-right-s-line"></i></div>
	</div>
</template>

<style lang="scss" scoped>
@use '../../styles/general.scss' as *;
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;

.wrapper {
	padding: 35px;
	position: relative;
	overflow-x: hidden;
	max-width: 1200px;
	background: $primary;
	border-radius: 13px;

	.arrow {
		position: absolute;
		top: 0;
		height: 100%;
		width: 120px;
		display: flex;
		align-items: center;

		&:first-child {
			left: 0;
			display: none;
			background: linear-gradient(90deg, $primary_pink 70%, transparent);
		}

		&:last-child {
			right: 0;
			justify-content: flex-end;
			background: linear-gradient(-90deg, $primary_pink 70%, transparent);
		}

		i {
			width: 55px;
			height: 55px;
			cursor: pointer;
			font-size: 1.2rem;
			text-align: center;
			line-height: 55px;
			border-radius: 50%;

			&:hover {
				background: $primary_light;
			}

			&:first-child {
				margin-left: 15px;
			}

			&:last-child {
				margin-right: 15px;
			}
		}
	}

	.tagsBox {
		display: flex;
		gap: 12px;
		list-style: none;
		overflow-x: hidden;
		scroll-behavior: smooth;

		&.dragging {
			scroll-behavior: auto;
			cursor: grab;

			.tag {
				user-select: none;
				pointer-events: none;
			}
		}

		.tag {
			cursor: pointer;
			font-size: 1.18rem;
			white-space: nowrap;
			background: $primary_light;
			padding: 13px 20px;
			border-radius: 30px;
			border: 1px solid $primary_light;

			&:hover {
				background: $primary_pink;
			}
		}

		.active {
			color: $primary_light;
			background: $primary_purple;
			border-color: transparent;
		}
	}
}
</style>
