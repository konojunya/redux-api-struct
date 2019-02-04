release:
	rm -rf node_modules
	yarn
	yarn test
	yarn lint

publish:
	git push --follow-tags
	npm publish


patch-release: release
	npm version patch
	$(MAKE) publish

minor-release: release
	npm version minor
	$(MAKE) publish

major-release: release
	npm version major
	$(MAKE) publish
